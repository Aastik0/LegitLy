'use client';

import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ActionItem {
    id: string;
    text: string;
    completed: boolean;
}

interface ActionChecklistProps {
    items: ActionItem[];
    onToggle?: (id: string) => void;
}

export default function ActionChecklist({ items, onToggle }: ActionChecklistProps) {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(
        new Set(items.filter(item => item.completed).map(item => item.id))
    );

    const handleToggle = (id: string) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(id)) {
            newChecked.delete(id);
        } else {
            newChecked.add(id);
        }
        setCheckedItems(newChecked);
        onToggle?.(id);
    };

    const completedCount = checkedItems.size;
    const totalCount = items.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

    return (
        <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">What to Do Next</h3>
                <div className="flex items-center gap-3">
                    <div className="flex-1 bg-neutral-200 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-primary-600 h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="text-sm font-medium text-neutral-600">
                        {completedCount}/{totalCount}
                    </span>
                </div>
            </div>

            {items.length === 0 ? (
                <p className="text-neutral-500 text-center py-4">No action items available.</p>
            ) : (
                <div className="space-y-3">
                    {items.map((item) => {
                        const isChecked = checkedItems.has(item.id);
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleToggle(item.id)}
                                className={`
                  w-full flex items-start gap-3 p-4 rounded-lg border-2 transition-all text-left
                  ${isChecked
                                        ? 'border-primary-300 bg-primary-50'
                                        : 'border-neutral-200 bg-white hover:border-primary-200 hover:bg-primary-50/50'
                                    }
                `}
                            >
                                {isChecked ? (
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <Circle className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-0.5" />
                                )}
                                <span className={`flex-1 ${isChecked ? 'text-neutral-500 line-through' : 'text-neutral-800'}`}>
                                    {item.text}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

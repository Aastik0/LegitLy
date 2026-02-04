'use client';

import { Calendar, Clock } from 'lucide-react';

interface Deadline {
    date: string;
    description: string;
    daysRemaining: number;
}

interface DeadlinesPanelProps {
    deadlines: Deadline[];
}

export default function DeadlinesPanel({ deadlines }: DeadlinesPanelProps) {
    const getUrgencyColor = (daysRemaining: number) => {
        if (daysRemaining <= 7) return 'bg-danger-light border-danger-DEFAULT text-danger-dark';
        if (daysRemaining <= 30) return 'bg-warning-light border-warning-DEFAULT text-warning-dark';
        return 'bg-success-light border-success-DEFAULT text-success-dark';
    };

    return (
        <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
            <h3 className="text-xl font-bold text-neutral-800 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary-600" />
                Important Deadlines
            </h3>

            {deadlines.length === 0 ? (
                <p className="text-neutral-500 text-center py-4">No deadlines found in this document.</p>
            ) : (
                <div className="space-y-4">
                    {deadlines.map((deadline, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${getUrgencyColor(deadline.daysRemaining)}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="font-semibold mb-1">{deadline.description}</p>
                                    <p className="text-sm opacity-90">
                                        {new Date(deadline.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-medium whitespace-nowrap">
                                    <Clock className="w-4 h-4" />
                                    {deadline.daysRemaining} days
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

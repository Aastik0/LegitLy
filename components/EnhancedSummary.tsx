'use client';

import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

interface EnhancedSummaryProps {
    summary: string;
    keyPoints: string[];
}

export default function EnhancedSummary({ summary, keyPoints }: EnhancedSummaryProps) {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    Document Summary
                </h2>
                <p className="text-neutral-600">
                    Here's what your agreement means in simple terms
                </p>
            </div>

            {/* Main Summary */}
            <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                <div className="flex items-start gap-3 mb-4">
                    <FileText className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-3">
                            Plain Language Explanation
                        </h3>
                        <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                            {summary}
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Points */}
            {keyPoints && keyPoints.length > 0 && (
                <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                    <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                        <h3 className="text-xl font-bold text-neutral-800">
                            Key Points to Remember
                        </h3>
                    </div>
                    <ul className="space-y-3 ml-9">
                        {keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

'use client';

interface SummaryCardProps {
    summary: string;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
                Plain Language Explanation
            </h3>
            <div className="prose prose-neutral max-w-none">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {summary}
                </p>
            </div>
        </div>
    );
}

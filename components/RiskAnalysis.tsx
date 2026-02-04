'use client';

import { ThumbsUp, ThumbsDown } from 'lucide-react';
import RiskMeter from './RiskMeter';
import { RiskLevel } from '@/store/uploadStore';

interface RiskAnalysisProps {
    riskScore: number;
    riskLevel: RiskLevel;
    goodPoints: string[];
    badPoints: string[];
}

export default function RiskAnalysis({ riskScore, riskLevel, goodPoints, badPoints }: RiskAnalysisProps) {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    Risk Analysis
                </h2>
                <p className="text-neutral-600">
                    Understanding the strengths and concerns in your agreement
                </p>
            </div>

            {/* Risk Meter */}
            <div className="bg-white rounded-2xl shadow-medium animate-fade-in">
                <RiskMeter riskScore={riskScore} riskLevel={riskLevel} />
            </div>

            {/* Good and Bad Points */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Good Points */}
                <div className="bg-white rounded-2xl shadow-soft p-6 animate-slide-up">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                            <ThumbsUp className="w-5 h-5 text-success-dark" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800">
                            Positive Aspects
                        </h3>
                    </div>

                    {goodPoints.length > 0 ? (
                        <ul className="space-y-3">
                            {goodPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 p-3 bg-success-light/30 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-success-DEFAULT text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-neutral-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-neutral-500 text-center py-4">No specific positive points identified</p>
                    )}
                </div>

                {/* Bad Points */}
                <div className="bg-white rounded-2xl shadow-soft p-6 animate-slide-up">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-danger-light flex items-center justify-center">
                            <ThumbsDown className="w-5 h-5 text-danger-dark" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800">
                            Areas of Concern
                        </h3>
                    </div>

                    {badPoints.length > 0 ? (
                        <ul className="space-y-3">
                            {badPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 p-3 bg-danger-light/30 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-danger-DEFAULT text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-neutral-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-neutral-500 text-center py-4">No specific concerns identified</p>
                    )}
                </div>
            </div>
        </div>
    );
}

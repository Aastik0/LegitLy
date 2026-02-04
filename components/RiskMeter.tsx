'use client';

import { useEffect, useState } from 'react';
import { RiskLevel } from '@/store/uploadStore';

interface RiskMeterProps {
    riskScore: number; // 0-100
    riskLevel: RiskLevel;
}

export default function RiskMeter({ riskScore, riskLevel }: RiskMeterProps) {
    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        // Animate the score on mount
        const timer = setTimeout(() => {
            setAnimatedScore(riskScore);
        }, 100);

        return () => clearTimeout(timer);
    }, [riskScore]);

    const getColor = () => {
        switch (riskLevel) {
            case 'safe':
                return {
                    stroke: '#10b981',
                    bg: '#d1fae5',
                    text: 'text-success-dark',
                    label: 'Safe',
                };
            case 'caution':
                return {
                    stroke: '#f59e0b',
                    bg: '#fef3c7',
                    text: 'text-warning-dark',
                    label: 'Caution',
                };
            case 'urgent':
                return {
                    stroke: '#ef4444',
                    bg: '#fee2e2',
                    text: 'text-danger-dark',
                    label: 'Urgent',
                };
        }
    };

    const color = getColor();
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Risk Assessment</h2>

            <div className="relative w-64 h-64">
                {/* Background circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="128"
                        cy="128"
                        r={radius}
                        stroke="#e5e5e5"
                        strokeWidth="16"
                        fill="none"
                    />
                    {/* Animated progress circle */}
                    <circle
                        cx="128"
                        cy="128"
                        r={radius}
                        stroke={color.stroke}
                        strokeWidth="16"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`text-5xl font-bold ${color.text}`}>
                        {Math.round(animatedScore)}
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">out of 100</div>
                </div>
            </div>

            {/* Risk level badge */}
            <div
                className="mt-6 px-6 py-3 rounded-full font-semibold text-lg"
                style={{ backgroundColor: color.bg, color: color.stroke }}
            >
                {color.label}
            </div>

            {/* Description */}
            <p className="mt-4 text-center text-neutral-600 max-w-md">
                {riskLevel === 'safe' && 'This document appears to be legitimate with no immediate concerns.'}
                {riskLevel === 'caution' && 'This document requires attention. Please review the details carefully.'}
                {riskLevel === 'urgent' && 'This document requires immediate action. Please consult a legal professional.'}
            </p>
        </div>
    );
}

'use client';

import { CheckCircle2 } from 'lucide-react';

interface Step {
    number: number;
    title: string;
    icon?: string;
}

interface StepIndicatorProps {
    currentStep: number;
    steps: Step[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div className="w-full glass py-8 px-4 mb-8 shadow-medium border-b border-white/20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between relative">
                    {/* Background Progress Line */}
                    <div className="absolute top-5 left-0 right-0 h-1 bg-neutral-200 rounded-full -z-10 overflow-hidden">
                        {/* Animated Progress Fill */}
                        <div
                            className="h-full bg-gradient-trust transition-all duration-700 ease-out-expo relative overflow-hidden"
                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer" />
                        </div>
                    </div>

                    {/* Steps */}
                    {steps.map((step) => {
                        const isCompleted = currentStep > step.number;
                        const isCurrent = currentStep === step.number;
                        const isUpcoming = currentStep < step.number;

                        return (
                            <div key={step.number} className="flex flex-col items-center flex-1 relative z-10">
                                {/* Circle */}
                                <div
                                    className={`
                    w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm
                    transition-all duration-500 ease-out-expo mb-3
                    ${isCompleted ? 'bg-gradient-trust text-white shadow-medium scale-100' : ''}
                    ${isCurrent ? 'bg-gradient-trust text-white ring-4 ring-primary-200 shadow-glow scale-110 animate-pulse-slow' : ''}
                    ${isUpcoming ? 'bg-neutral-200 text-neutral-500 scale-90' : ''}
                  `}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-6 h-6 animate-scale-in" />
                                    ) : (
                                        <span className={isCurrent ? 'animate-scale-in' : ''}>{step.number}</span>
                                    )}
                                </div>

                                {/* Label */}
                                <span
                                    className={`
                    text-xs text-center font-semibold max-w-[80px] hidden sm:block
                    transition-all duration-300
                    ${isCurrent ? 'text-primary-700 scale-105' : 'text-neutral-600'}
                    ${isCompleted ? 'text-primary-600' : ''}
                  `}
                                >
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile: Current step title */}
                <div className="sm:hidden mt-6 text-center animate-fade-in">
                    <p className="text-sm font-semibold text-primary-700 bg-primary-50 px-4 py-2 rounded-full inline-block">
                        Step {currentStep}: {steps[currentStep - 1]?.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

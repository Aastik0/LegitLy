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
        <div className="w-full bg-white shadow-sm py-6 px-4 mb-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between relative">
                    {/* Progress line */}
                    <div className="absolute top-5 left-0 right-0 h-1 bg-neutral-200 -z-10">
                        <div
                            className="h-full bg-primary-600 transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        />
                    </div>

                    {/* Steps */}
                    {steps.map((step) => {
                        const isCompleted = currentStep > step.number;
                        const isCurrent = currentStep === step.number;
                        const isUpcoming = currentStep < step.number;

                        return (
                            <div key={step.number} className="flex flex-col items-center flex-1">
                                {/* Circle */}
                                <div
                                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                    transition-all duration-300 mb-2
                    ${isCompleted ? 'bg-primary-600 text-white' : ''}
                    ${isCurrent ? 'bg-primary-600 text-white ring-4 ring-primary-200 scale-110' : ''}
                    ${isUpcoming ? 'bg-neutral-200 text-neutral-500' : ''}
                  `}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-5 h-5" />
                                    ) : (
                                        step.number
                                    )}
                                </div>

                                {/* Label */}
                                <span
                                    className={`
                    text-xs text-center font-medium max-w-[80px] hidden sm:block
                    ${isCurrent ? 'text-primary-600' : 'text-neutral-600'}
                  `}
                                >
                                    {step.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile: Current step title */}
                <div className="sm:hidden mt-4 text-center">
                    <p className="text-sm font-medium text-primary-600">
                        Step {currentStep}: {steps[currentStep - 1]?.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

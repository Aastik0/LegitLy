'use client';

import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download, Share2, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUploadStore } from '@/store/uploadStore';
import StepIndicator from '@/components/StepIndicator';
import DocumentUpload from '@/components/DocumentUpload';
import LanguageSelector from '@/components/LanguageSelector';
import EnhancedSummary from '@/components/EnhancedSummary';
import RiskAnalysis from '@/components/RiskAnalysis';
import SuggestionsPrompt from '@/components/SuggestionsPrompt';
import TermsConditions from '@/components/TermsConditions';

const steps = [
    { number: 1, title: 'Upload' },
    { number: 2, title: 'Language' },
    { number: 3, title: 'Summary' },
    { number: 4, title: 'Risk Analysis' },
    { number: 5, title: 'Suggestions' },
    { number: 6, title: 'Terms' },
    { number: 7, title: 'Complete' },
];

// Mock data for demonstration
const mockAnalysis = {
    riskScore: 45,
    riskLevel: 'caution' as const,
    summary: `This is a rental agreement between you (the tenant) and the property owner. The agreement outlines your rights and responsibilities for renting the property.

The key terms include a 12-month lease period, monthly rent of ₹25,000, and a security deposit of ₹50,000. You are responsible for maintaining the property and paying utilities.

The agreement includes standard clauses about notice periods, maintenance responsibilities, and conditions for lease termination.`,
    keyPoints: [
        'Lease duration: 12 months starting from March 1, 2026',
        'Monthly rent: ₹25,000 (due on 1st of each month)',
        'Security deposit: ₹50,000 (refundable)',
        'Notice period: 2 months for termination',
        'Utilities (electricity, water) are tenant\'s responsibility',
    ],
    goodPoints: [
        'Clear rent amount and payment schedule',
        'Security deposit is refundable with conditions',
        'Maintenance responsibilities are clearly defined',
        'Standard notice period for both parties',
        'No hidden charges or ambiguous clauses',
    ],
    badPoints: [
        'No rent increase cap mentioned for renewals',
        'Landlord can enter property with only 24-hour notice',
        'Strict penalty clause for late rent payment (10% per month)',
        'Limited rights for early termination',
        'No provision for property modifications',
    ],
    deadlines: [
        { date: '2026-03-01', description: 'Lease start date', daysRemaining: 25 },
        { date: '2026-02-25', description: 'Security deposit due', daysRemaining: 21 },
    ],
    actionItems: [
        { id: '1', text: 'Review all clauses carefully', completed: false },
        { id: '2', text: 'Negotiate rent increase cap', completed: false },
        { id: '3', text: 'Clarify property entry notice period', completed: false },
        { id: '4', text: 'Pay security deposit before lease start', completed: false },
    ],
};

export default function AnalyzePage() {
    const router = useRouter();
    const {
        currentStep,
        nextStep,
        previousStep,
        uploadedFile,
        selectedLanguage,
        analysis,
        setAnalysis,
        acceptedTerms,
        resetWizard,
    } = useUploadStore();

    // Simulate analysis after upload
    useEffect(() => {
        if (currentStep === 1 && uploadedFile && !analysis) {
            // In real app, this would call the backend API
            setTimeout(() => {
                setAnalysis(mockAnalysis);
            }, 1000);
        }
    }, [currentStep, uploadedFile, analysis, setAnalysis]);

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return uploadedFile !== null;
            case 2:
                return selectedLanguage !== null;
            case 3:
            case 4:
            case 5:
                return true;
            case 6:
                return acceptedTerms;
            case 7:
                return true;
            default:
                return false;
        }
    };

    const handleNext = () => {
        if (canProceed()) {
            nextStep();
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            previousStep();
        }
    };

    const handleStartOver = () => {
        resetWizard();
        router.push('/');
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                                Upload Your Agreement
                            </h2>
                            <p className="text-neutral-600">
                                Upload a PDF or image of your legal document to get started
                            </p>
                        </div>
                        <DocumentUpload />
                    </div>
                );

            case 2:
                return <LanguageSelector />;

            case 3:
                return analysis ? (
                    <EnhancedSummary
                        summary={analysis.summary}
                        keyPoints={analysis.keyPoints}
                    />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-neutral-500">Analyzing document...</p>
                    </div>
                );

            case 4:
                return analysis ? (
                    <RiskAnalysis
                        riskScore={analysis.riskScore}
                        riskLevel={analysis.riskLevel}
                        goodPoints={analysis.goodPoints}
                        badPoints={analysis.badPoints}
                    />
                ) : null;

            case 5:
                return <SuggestionsPrompt />;

            case 6:
                return <TermsConditions />;

            case 7:
                return (
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-white rounded-2xl shadow-soft p-12 animate-fade-in">
                            <div className="w-20 h-20 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-success-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                                Analysis Complete!
                            </h2>
                            <p className="text-neutral-600 mb-8">
                                Your document has been analyzed. You can now download the report or start a new analysis.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Report
                                </button>
                                <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-2">
                                    <Share2 className="w-5 h-5" />
                                    Share Report
                                </button>
                                <button
                                    onClick={handleStartOver}
                                    className="px-6 py-3 bg-neutral-100 text-neutral-700 font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                    Start Over
                                </button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Step Indicator */}
            <StepIndicator currentStep={currentStep} steps={steps} />

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
                {renderStepContent()}

                {/* Navigation Buttons */}
                {currentStep < 7 && (
                    <div className="max-w-4xl mx-auto mt-12 flex justify-between gap-4">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className="px-6 py-3 bg-white text-neutral-700 font-medium rounded-lg border-2 border-neutral-300 hover:border-neutral-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            Next
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

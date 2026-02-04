'use client';

import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';
import RiskMeter from '@/components/RiskMeter';
import SummaryCard from '@/components/SummaryCard';
import DeadlinesPanel from '@/components/DeadlinesPanel';
import ActionChecklist from '@/components/ActionChecklist';
import LanguageToggle from '@/components/LanguageToggle';
import { useUploadStore } from '@/store/uploadStore';

// Mock data for demonstration - replace with actual API data
const mockAnalysis = {
    riskScore: 35,
    riskLevel: 'caution' as const,
    summary: `This document appears to be a court summons requiring your appearance. The document is legitimate and issued by the District Court.

Key Points:
• You are required to appear in court on the specified date
• This is a civil matter, not a criminal case
• Failure to appear may result in a default judgment
• You have the right to legal representation

The language used is standard legal terminology. While the matter requires attention, there are no immediate red flags suggesting fraud.`,
    deadlines: [
        {
            date: '2026-03-15',
            description: 'Court appearance required',
            daysRemaining: 39,
        },
        {
            date: '2026-03-01',
            description: 'File written response',
            daysRemaining: 25,
        },
    ],
    actionItems: [
        {
            id: '1',
            text: 'Consult with a lawyer to understand your legal options',
            completed: false,
        },
        {
            id: '2',
            text: 'Gather all relevant documents related to this case',
            completed: false,
        },
        {
            id: '3',
            text: 'Mark the court date on your calendar',
            completed: false,
        },
        {
            id: '4',
            text: 'Prepare a written response if required',
            completed: false,
        },
        {
            id: '5',
            text: 'Arrange for legal representation before the court date',
            completed: false,
        },
    ],
};

export default function Dashboard() {
    const { analysis } = useUploadStore();

    // Use mock data if no analysis is available
    const displayAnalysis = analysis || mockAnalysis;

    return (
        <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Back</span>
                            </Link>
                            <div className="flex items-center gap-2">
                                <Shield className="w-6 h-6 text-primary-600" />
                                <h1 className="text-xl font-bold text-neutral-800">LegitLy</h1>
                            </div>
                        </div>
                        <LanguageToggle />
                    </div>
                </div>
            </header>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                    Document Analysis Results
                </h2>

                {/* Risk Meter - Focal Point */}
                <div className="bg-white rounded-2xl shadow-medium mb-8 animate-fade-in">
                    <RiskMeter
                        riskScore={displayAnalysis.riskScore}
                        riskLevel={displayAnalysis.riskLevel}
                    />
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <SummaryCard summary={displayAnalysis.summary} />
                        <DeadlinesPanel deadlines={displayAnalysis.deadlines} />
                    </div>

                    {/* Right Column */}
                    <div>
                        <ActionChecklist items={displayAnalysis.actionItems} />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg">
                        Download Report
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        Analyze Another Document
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 mt-16 border-t border-neutral-200">
                <p className="text-center text-neutral-500 text-sm">
                    © 2026 LegitLy. Empowering families with legal clarity.
                </p>
            </footer>
        </main>
    );
}

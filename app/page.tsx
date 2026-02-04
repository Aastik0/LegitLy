import { Shield, FileCheck, Clock, CheckCircle } from 'lucide-react';
import DocumentUpload from '@/components/DocumentUpload';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-primary-600" />
                        <h1 className="text-2xl font-bold text-neutral-800">LegitLy</h1>
                    </div>
                    <LanguageToggle />
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    <h2 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        Verify Legal Documents
                        <span className="block text-primary-600 mt-2">Instantly & Accurately</span>
                    </h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Protect your family from fraud and confusion. Our AI-powered tool helps you understand
                        legal documents in plain language, identify risks, and know exactly what to do next.
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <FileCheck className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Instant Verification</h3>
                            <p className="text-sm text-neutral-600">
                                Upload and analyze documents in seconds
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Track Deadlines</h3>
                            <p className="text-sm text-neutral-600">
                                Never miss important dates and timelines
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Clear Action Steps</h3>
                            <p className="text-sm text-neutral-600">
                                Get a simple checklist of what to do next
                            </p>
                        </div>
                    </div>

                    {/* Upload Component */}
                    <DocumentUpload />

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Secure & Private</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCheck className="w-4 h-4" />
                            <span>AI-Powered Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Trusted by Families</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 mt-16 border-t border-neutral-200">
                <p className="text-center text-neutral-500 text-sm">
                    © 2026 LegitLy. Empowering families with legal clarity.
                </p>
            </footer>
        </main>
    );
}

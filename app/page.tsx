import { Shield, FileCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <div className="flex items-center gap-2">
                    <Shield className="w-8 h-8 text-primary-600" />
                    <h1 className="text-2xl font-bold text-neutral-800">LegitLy</h1>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    <h2 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        Understand Your Legal Documents
                        <span className="block text-primary-600 mt-2">In Simple Language</span>
                    </h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Upload your agreement and get instant AI-powered analysis with risk assessment,
                        plain language summaries, and personalized guidance—all in your preferred language.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/analyze"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Get Started
                        <ArrowRight className="w-6 h-6" />
                    </Link>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-4 gap-6 mt-20">
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <FileCheck className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Upload Document</h3>
                            <p className="text-sm text-neutral-600">
                                PDF or image files accepted
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Risk Analysis</h3>
                            <p className="text-sm text-neutral-600">
                                Identify good and bad points
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Plain Summary</h3>
                            <p className="text-sm text-neutral-600">
                                Understand complex legal terms
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                            <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="font-semibold text-neutral-800 mb-2">Get Guidance</h3>
                            <p className="text-sm text-neutral-600">
                                Optional legal consultation
                            </p>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
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
                            <span>10+ Languages Supported</span>
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

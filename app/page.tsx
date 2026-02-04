import { Shield, FileCheck, Clock, CheckCircle, ArrowRight, Sparkles, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            {/* Header */}
            <header className="relative container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-gradient-trust rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-neutral-900">LegitLy</h1>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-5xl mx-auto text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 backdrop-blur-sm rounded-full mb-8 animate-slide-down">
                        <Sparkles className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-semibold text-primary-700">AI-Powered Legal Clarity</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
                        Understand Your
                        <span className="block mt-2 text-gradient animate-slide-up">Legal Documents</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Get instant AI-powered analysis with risk assessment, plain language summaries,
                        and personalized guidance—all in your preferred language.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <Link
                            href="/analyze"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-trust text-white text-lg font-semibold rounded-2xl shadow-large hover:shadow-glow-lg hover:scale-105 transition-all duration-400 ease-out-expo active:scale-95"
                        >
                            Get Started
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-700 text-lg font-semibold rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:shadow-medium hover:scale-105 transition-all duration-400 ease-out-expo active:scale-95">
                            <Zap className="w-5 h-5 text-primary-600" />
                            See Demo
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-accent" />
                            <span className="font-medium">Bank-Level Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="font-medium">AI-Powered Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="font-medium">10+ Languages</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative container mx-auto px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: FileCheck,
                                title: 'Upload Document',
                                description: 'PDF or image files accepted',
                                color: 'from-blue-500 to-cyan-500',
                                delay: '0s',
                            },
                            {
                                icon: Shield,
                                title: 'Risk Analysis',
                                description: 'Identify good and bad points',
                                color: 'from-purple-500 to-pink-500',
                                delay: '0.1s',
                            },
                            {
                                icon: Clock,
                                title: 'Plain Summary',
                                description: 'Understand complex legal terms',
                                color: 'from-orange-500 to-red-500',
                                delay: '0.2s',
                            },
                            {
                                icon: CheckCircle,
                                title: 'Get Guidance',
                                description: 'Optional legal consultation',
                                color: 'from-green-500 to-emerald-500',
                                delay: '0.3s',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group card-premium-hover p-8 animate-slide-up"
                                style={{ animationDelay: feature.delay }}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-medium group-hover:shadow-large group-hover:scale-110 transition-all duration-400`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="relative container mx-auto px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-12 shadow-large border border-white/20">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                                <div className="text-4xl font-bold text-gradient mb-2">10,000+</div>
                                <div className="text-neutral-600">Documents Analyzed</div>
                            </div>
                            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                                <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                                <div className="text-neutral-600">Accuracy Rate</div>
                            </div>
                            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                <div className="text-neutral-600">Instant Analysis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative container mx-auto px-4 py-12 border-t border-neutral-200/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-trust rounded-xl flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-neutral-600">© 2026 LegitLy. Empowering families with legal clarity.</span>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-neutral-500">
                            <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
                            <a href="#" className="hover:text-primary-600 transition-colors">Support</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

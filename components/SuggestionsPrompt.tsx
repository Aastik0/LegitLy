'use client';

import { useState } from 'react';
import { Lightbulb, MessageCircle, Phone, Mail } from 'lucide-react';
import { useUploadStore } from '@/store/uploadStore';

export default function SuggestionsPrompt() {
    const { wantsSuggestions, setWantsSuggestions } = useUploadStore();
    const [showContactForm, setShowContactForm] = useState(false);

    const handleYes = () => {
        setWantsSuggestions(true);
        setShowContactForm(true);
    };

    const handleNo = () => {
        setWantsSuggestions(false);
        setShowContactForm(false);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    Need Further Guidance?
                </h2>
                <p className="text-neutral-600 text-lg">
                    We can provide personalized suggestions and connect you with legal experts
                </p>
            </div>

            {!wantsSuggestions && !showContactForm ? (
                <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                            What you'll get:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MessageCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                <span className="text-neutral-700">Personalized action steps based on your document</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                <span className="text-neutral-700">Optional consultation with verified legal professionals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                <span className="text-neutral-700">Email reminders for important deadlines</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleYes}
                            className="flex-1 px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Yes, I'm Interested
                        </button>
                        <button
                            onClick={handleNo}
                            className="flex-1 px-6 py-4 bg-white text-neutral-700 font-semibold rounded-lg border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
                        >
                            No, Thanks
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mx-auto mb-3">
                            <MessageCircle className="w-6 h-6 text-success-dark" />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                            Great! We'll Help You
                        </h3>
                        <p className="text-neutral-600">
                            Our team will review your document and reach out with personalized guidance
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleNo}
                        className="mt-4 text-sm text-neutral-500 hover:text-neutral-700 underline"
                    >
                        Actually, I don't need this
                    </button>
                </div>
            )}
        </div>
    );
}

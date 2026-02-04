'use client';

import { Language, useUploadStore } from '@/store/uploadStore';
import { Check } from 'lucide-react';

const languages = [
    { code: 'en' as Language, name: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'hi' as Language, name: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta' as Language, name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te' as Language, name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn' as Language, name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr' as Language, name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
    { code: 'gu' as Language, name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn' as Language, name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml' as Language, name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
    { code: 'pa' as Language, name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

export default function LanguageSelector() {
    const { selectedLanguage, setLanguage } = useUploadStore();

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                    Choose Your Preferred Language
                </h2>
                <p className="text-lg text-neutral-600">
                    Select the language in which you'd like to view the analysis
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {languages.map((lang, index) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`
              group relative p-6 rounded-2xl border-2 transition-all duration-400 ease-out-expo
              hover:scale-105 hover:-translate-y-1
              animate-scale-in
              ${selectedLanguage === lang.code
                                ? 'border-primary-600 bg-gradient-to-br from-primary-50 to-purple-50 shadow-large'
                                : 'border-neutral-200 bg-white hover:border-primary-300 hover:shadow-medium'
                            }
            `}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {/* Selected Indicator */}
                        {selectedLanguage === lang.code && (
                            <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-trust rounded-full flex items-center justify-center shadow-medium animate-scale-in">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                        )}

                        {/* Flag Emoji */}
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            {lang.flag}
                        </div>

                        {/* Language Name */}
                        <div className="text-center">
                            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${selectedLanguage === lang.code ? 'text-gradient' : 'text-neutral-800 group-hover:text-primary-600'
                                }`}>
                                {lang.native}
                            </p>
                            <p className="text-sm text-neutral-500">{lang.name}</p>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${selectedLanguage === lang.code ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                            }`} style={{
                                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                            }} />
                    </button>
                ))}
            </div>

            {/* Selected Confirmation */}
            <div className="mt-8 p-5 glass rounded-2xl border border-primary-200/50 shadow-medium animate-slide-up">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-gradient-trust rounded-full flex items-center justify-center shadow-medium">
                        <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm text-neutral-600">Selected Language</p>
                        <p className="text-lg font-bold text-gradient">
                            {languages.find(l => l.code === selectedLanguage)?.native}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

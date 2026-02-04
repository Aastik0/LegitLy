'use client';

import { Language, useUploadStore } from '@/store/uploadStore';

const languages = [
    { code: 'en' as Language, name: 'English', native: 'English' },
    { code: 'hi' as Language, name: 'Hindi', native: 'हिंदी' },
    { code: 'ta' as Language, name: 'Tamil', native: 'தமிழ்' },
    { code: 'te' as Language, name: 'Telugu', native: 'తెలుగు' },
    { code: 'bn' as Language, name: 'Bengali', native: 'বাংলা' },
    { code: 'mr' as Language, name: 'Marathi', native: 'मराठी' },
    { code: 'gu' as Language, name: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'kn' as Language, name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ml' as Language, name: 'Malayalam', native: 'മലയാളം' },
    { code: 'pa' as Language, name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
];

export default function LanguageSelector() {
    const { selectedLanguage, setLanguage } = useUploadStore();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    Choose Your Preferred Language
                </h2>
                <p className="text-neutral-600">
                    Select the language in which you'd like to view the analysis
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`
              p-6 rounded-xl border-2 transition-all duration-200
              hover:shadow-md hover:scale-105
              ${selectedLanguage === lang.code
                                ? 'border-primary-600 bg-primary-50 shadow-md'
                                : 'border-neutral-200 bg-white hover:border-primary-300'
                            }
            `}
                    >
                        <div className="text-center">
                            <p className={`text-2xl font-semibold mb-2 ${selectedLanguage === lang.code ? 'text-primary-600' : 'text-neutral-800'
                                }`}>
                                {lang.native}
                            </p>
                            <p className="text-sm text-neutral-500">{lang.name}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm text-primary-800 text-center">
                    <strong>Selected:</strong> {languages.find(l => l.code === selectedLanguage)?.native}
                </p>
            </div>
        </div>
    );
}

'use client';

import { Languages } from 'lucide-react';
import { useUploadStore } from '@/store/uploadStore';

const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'regional', label: 'Regional', native: 'Regional' },
] as const;

export default function LanguageToggle() {
    const { currentLanguage, setLanguage } = useUploadStore();

    return (
        <div className="flex items-center gap-2 bg-white rounded-full shadow-soft p-1">
            <Languages className="w-5 h-5 text-primary-600 ml-2" />
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all
            ${currentLanguage === lang.code
                            ? 'bg-primary-600 text-white shadow-md'
                            : 'text-neutral-600 hover:bg-neutral-100'
                        }
          `}
                >
                    {lang.native}
                </button>
            ))}
        </div>
    );
}

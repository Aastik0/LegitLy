'use client';

import { useState } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { useUploadStore } from '@/store/uploadStore';

export default function TermsConditions() {
    const { acceptedTerms, setAcceptedTerms } = useUploadStore();
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const isNearBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 50;
        if (isNearBottom && !hasScrolled) {
            setHasScrolled(true);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    Terms & Conditions
                </h2>
                <p className="text-neutral-600">
                    Please review our terms before proceeding
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-8 animate-slide-up">
                {/* Scrollable Terms Content */}
                <div
                    onScroll={handleScroll}
                    className="h-96 overflow-y-auto border-2 border-neutral-200 rounded-lg p-6 mb-6 prose prose-sm max-w-none"
                >
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">LegitLy Terms of Service</h3>

                    <p className="text-neutral-700 mb-4">
                        <strong>Last Updated:</strong> February 4, 2026
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">1. Acceptance of Terms</h4>
                    <p className="text-neutral-700 mb-4">
                        By accessing and using LegitLy ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use the Service.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">2. Service Description</h4>
                    <p className="text-neutral-700 mb-4">
                        LegitLy provides AI-powered analysis of legal documents to help users understand complex legal language. Our service is designed to provide general information and should not be considered as legal advice.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">3. Not Legal Advice</h4>
                    <p className="text-neutral-700 mb-4">
                        <strong>IMPORTANT:</strong> The information provided by LegitLy is for informational purposes only and does not constitute legal advice. For specific legal guidance, please consult with a qualified attorney.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">4. User Responsibilities</h4>
                    <p className="text-neutral-700 mb-4">
                        You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-700 mb-4">
                        <li>Ensuring the accuracy of documents you upload</li>
                        <li>Maintaining the confidentiality of sensitive information</li>
                        <li>Using the Service in compliance with applicable laws</li>
                        <li>Not uploading malicious or harmful content</li>
                    </ul>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">5. Privacy & Data Protection</h4>
                    <p className="text-neutral-700 mb-4">
                        We take your privacy seriously. Your uploaded documents are:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-700 mb-4">
                        <li>Encrypted during transmission and storage</li>
                        <li>Processed solely for analysis purposes</li>
                        <li>Not shared with third parties without your consent</li>
                        <li>Automatically deleted after 30 days</li>
                    </ul>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">6. Accuracy & Limitations</h4>
                    <p className="text-neutral-700 mb-4">
                        While we strive for accuracy, LegitLy's AI analysis may contain errors or omissions. We do not guarantee the completeness or accuracy of any analysis provided.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">7. Limitation of Liability</h4>
                    <p className="text-neutral-700 mb-4">
                        LegitLy and its operators shall not be liable for any damages arising from the use or inability to use the Service, including but not limited to direct, indirect, incidental, or consequential damages.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">8. Intellectual Property</h4>
                    <p className="text-neutral-700 mb-4">
                        All content, features, and functionality of the Service are owned by LegitLy and are protected by copyright, trademark, and other intellectual property laws.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">9. Modifications to Terms</h4>
                    <p className="text-neutral-700 mb-4">
                        We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.
                    </p>

                    <h4 className="font-semibold text-neutral-800 mt-6 mb-2">10. Contact Information</h4>
                    <p className="text-neutral-700 mb-4">
                        For questions about these terms, please contact us at: support@legitly.com
                    </p>
                </div>

                {/* Acceptance Checkbox */}
                <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                    <input
                        type="checkbox"
                        id="accept-terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 mt-0.5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="accept-terms" className="flex-1 text-sm text-neutral-700 cursor-pointer">
                        I have read and agree to the Terms & Conditions. I understand that LegitLy provides informational analysis only and does not constitute legal advice.
                    </label>
                </div>

                {acceptedTerms && (
                    <div className="mt-4 p-3 bg-success-light rounded-lg flex items-center gap-2 animate-fade-in">
                        <CheckCircle2 className="w-5 h-5 text-success-dark" />
                        <span className="text-sm text-success-dark font-medium">
                            Terms accepted. You can now proceed.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

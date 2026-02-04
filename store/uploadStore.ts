import { create } from 'zustand';

export type RiskLevel = 'safe' | 'caution' | 'urgent';

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa';

export interface DocumentAnalysis {
    riskScore: number; // 0-100
    riskLevel: RiskLevel;
    summary: string;
    keyPoints: string[];
    goodPoints: string[];
    badPoints: string[];
    deadlines: {
        date: string;
        description: string;
        daysRemaining: number;
    }[];
    actionItems: {
        id: string;
        text: string;
        completed: boolean;
    }[];
}

interface UploadState {
    // Wizard state
    currentStep: number; // 1-7

    // Upload state
    isUploading: boolean;
    uploadProgress: number;
    uploadedFile: File | null;

    // Analysis state
    isAnalyzing: boolean;
    analysis: DocumentAnalysis | null;

    // Language state
    selectedLanguage: Language;

    // User preferences
    wantsSuggestions: boolean;
    acceptedTerms: boolean;

    // Actions
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    previousStep: () => void;
    setUploadProgress: (progress: number) => void;
    setUploadedFile: (file: File | null) => void;
    setIsUploading: (isUploading: boolean) => void;
    setIsAnalyzing: (isAnalyzing: boolean) => void;
    setAnalysis: (analysis: DocumentAnalysis | null) => void;
    setLanguage: (language: Language) => void;
    setWantsSuggestions: (wants: boolean) => void;
    setAcceptedTerms: (accepted: boolean) => void;
    resetWizard: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
    // Initial state
    currentStep: 1,
    isUploading: false,
    uploadProgress: 0,
    uploadedFile: null,
    isAnalyzing: false,
    analysis: null,
    selectedLanguage: 'en',
    wantsSuggestions: false,
    acceptedTerms: false,

    // Actions
    setCurrentStep: (step) => set({ currentStep: step }),
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 7) })),
    previousStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
    setUploadProgress: (progress) => set({ uploadProgress: progress }),
    setUploadedFile: (file) => set({ uploadedFile: file }),
    setIsUploading: (isUploading) => set({ isUploading }),
    setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
    setAnalysis: (analysis) => set({ analysis }),
    setLanguage: (language) => set({ selectedLanguage: language }),
    setWantsSuggestions: (wants) => set({ wantsSuggestions: wants }),
    setAcceptedTerms: (accepted) => set({ acceptedTerms: accepted }),
    resetWizard: () => set({
        currentStep: 1,
        isUploading: false,
        uploadProgress: 0,
        uploadedFile: null,
        isAnalyzing: false,
        analysis: null,
        selectedLanguage: 'en',
        wantsSuggestions: false,
        acceptedTerms: false,
    }),
}));

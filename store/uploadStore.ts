import { create } from 'zustand';

export type RiskLevel = 'safe' | 'caution' | 'urgent';

export interface DocumentAnalysis {
    riskScore: number; // 0-100
    riskLevel: RiskLevel;
    summary: string;
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
    // Upload state
    isUploading: boolean;
    uploadProgress: number;
    uploadedFile: File | null;

    // Analysis state
    isAnalyzing: boolean;
    analysis: DocumentAnalysis | null;

    // Language state
    currentLanguage: 'en' | 'hi' | 'regional';

    // Actions
    setUploadProgress: (progress: number) => void;
    setUploadedFile: (file: File | null) => void;
    setIsUploading: (isUploading: boolean) => void;
    setIsAnalyzing: (isAnalyzing: boolean) => void;
    setAnalysis: (analysis: DocumentAnalysis | null) => void;
    setLanguage: (language: 'en' | 'hi' | 'regional') => void;
    resetUpload: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
    // Initial state
    isUploading: false,
    uploadProgress: 0,
    uploadedFile: null,
    isAnalyzing: false,
    analysis: null,
    currentLanguage: 'en',

    // Actions
    setUploadProgress: (progress) => set({ uploadProgress: progress }),
    setUploadedFile: (file) => set({ uploadedFile: file }),
    setIsUploading: (isUploading) => set({ isUploading }),
    setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
    setAnalysis: (analysis) => set({ analysis }),
    setLanguage: (language) => set({ currentLanguage: language }),
    resetUpload: () => set({
        isUploading: false,
        uploadProgress: 0,
        uploadedFile: null,
        isAnalyzing: false,
        analysis: null,
    }),
}));

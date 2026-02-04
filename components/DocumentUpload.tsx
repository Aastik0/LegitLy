'use client';

import { useCallback, useState } from 'react';
import { Upload, FileText, Image as ImageIcon, X } from 'lucide-react';
import { useUploadStore } from '@/store/uploadStore';
import axios from 'axios';

const ACCEPTED_FILE_TYPES = {
    'application/pdf': ['.pdf'],
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/jpg': ['.jpg'],
};

export default function DocumentUpload() {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        uploadedFile,
        isUploading,
        uploadProgress,
        setUploadedFile,
        setIsUploading,
        setUploadProgress,
    } = useUploadStore();

    const validateFile = (file: File): boolean => {
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (file.size > maxSize) {
            setError('File size must be less than 10MB');
            return false;
        }

        const validTypes = Object.keys(ACCEPTED_FILE_TYPES);
        if (!validTypes.includes(file.type)) {
            setError('Please upload a PDF or image file (PNG, JPG, JPEG)');
            return false;
        }

        setError(null);
        return true;
    };

    const handleFile = (file: File) => {
        if (validateFile(file)) {
            setUploadedFile(file);
        }
    };

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (!uploadedFile) return;

        setIsUploading(true);
        setUploadProgress(0);

        const formData = new FormData();
        formData.append('document', uploadedFile);

        try {
            // Replace with your actual backend endpoint
            await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const progress = progressEvent.total
                        ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        : 0;
                    setUploadProgress(progress);
                },
            });

            // Upload successful - the wizard will handle navigation
            setError(null);
        } catch (err) {
            setError('Upload failed. Please try again.');
            console.error('Upload error:', err);
        } finally {
            setIsUploading(false);
        }
    };

    const removeFile = () => {
        setUploadedFile(null);
        setError(null);
    };

    const getFileIcon = () => {
        if (!uploadedFile) return null;

        if (uploadedFile.type === 'application/pdf') {
            return <FileText className="w-12 h-12 text-primary-600" />;
        }
        return <ImageIcon className="w-12 h-12 text-primary-600" />;
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div
                className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300
          ${isDragging
                        ? 'border-primary-500 bg-primary-50 scale-105'
                        : 'border-neutral-300 bg-white hover:border-primary-400 hover:bg-primary-50/50'
                    }
          ${uploadedFile ? 'border-solid border-primary-500' : ''}
        `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {!uploadedFile ? (
                    <>
                        <Upload className="w-16 h-16 mx-auto mb-4 text-primary-500" />
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                            Upload Your Legal Document
                        </h3>
                        <p className="text-neutral-600 mb-6">
                            Drag and drop your file here, or click to browse
                        </p>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={handleFileInput}
                            disabled={isUploading}
                        />
                        <label
                            htmlFor="file-upload"
                            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg cursor-pointer hover:bg-primary-700 transition-colors"
                        >
                            Choose File
                        </label>
                        <p className="text-sm text-neutral-500 mt-4">
                            Supported formats: PDF, PNG, JPG (Max 10MB)
                        </p>
                    </>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-4">
                            {getFileIcon()}
                            <div className="flex-1 text-left">
                                <p className="font-medium text-neutral-800 truncate">
                                    {uploadedFile.name}
                                </p>
                                <p className="text-sm text-neutral-500">
                                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                            <button
                                onClick={removeFile}
                                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                                disabled={isUploading}
                            >
                                <X className="w-5 h-5 text-neutral-600" />
                            </button>
                        </div>

                        {isUploading && (
                            <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-primary-600 h-full transition-all duration-300"
                                    style={{ width: `${uploadProgress}%` }}
                                />
                            </div>
                        )}

                        <button
                            onClick={handleUpload}
                            disabled={isUploading}
                            className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isUploading ? `Uploading... ${uploadProgress}%` : 'Analyze Document'}
                        </button>
                    </div>
                )}
            </div>

            {error && (
                <div className="mt-4 p-4 bg-danger-light border border-danger-DEFAULT rounded-lg text-danger-dark">
                    {error}
                </div>
            )}
        </div>
    );
}

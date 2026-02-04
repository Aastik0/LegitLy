import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('document') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Validate file type
        const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Please upload a PDF or image file.' },
                { status: 400 }
            );
        }

        // Validate file size (10MB max)
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: 'File size exceeds 10MB limit.' },
                { status: 400 }
            );
        }

        // TODO: In production, you would:
        // 1. Upload the file to cloud storage (S3, Google Cloud Storage, etc.)
        // 2. Send the file to your AI/ML backend for analysis
        // 3. Store the analysis results in a database
        // 4. Return the analysis ID or results

        // For now, return success with mock data
        // The actual analysis will be handled by the frontend using mock data
        return NextResponse.json({
            success: true,
            message: 'File uploaded successfully',
            fileInfo: {
                name: file.name,
                size: file.size,
                type: file.type,
            },
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed. Please try again.' },
            { status: 500 }
        );
    }
}

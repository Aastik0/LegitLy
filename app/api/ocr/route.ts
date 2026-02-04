import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";

// Define response types for better type safety
interface OCRResponse {
  text?: string;
  error?: string;
  details?: string;
}

export async function POST(req: Request) {
  try {
    // 1. Input Validation
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json<OCRResponse>(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { imageBase64 } = body;

    if (!imageBase64) {
      return NextResponse.json<OCRResponse>(
        { error: "Missing 'imageBase64' field in request body" },
        { status: 400 }
      );
    }

    if (typeof imageBase64 !== "string") {
      return NextResponse.json<OCRResponse>(
        { error: "'imageBase64' must be a string" },
        { status: 400 }
      );
    }

    // Basic Base64 format check (optional but recommended)
    // Matches data:image/png;base64,.... or just raw base64 strings if you prefer permissive
    // Here we'll trust Tesseract to handle or fail gracefully, but we can ensure it's not empty.
    if (!imageBase64.trim()) {
        return NextResponse.json<OCRResponse>(
          { error: "'imageBase64' cannot be empty" },
          { status: 400 }
        );
    }

    // 2. OCR Processing
    // Using explicit configuration for "eng" (English)
    // Tesseract.recognize returns a Promise that resolves with the result
    const result = await Tesseract.recognize(
      imageBase64,
      "eng",
      {
        // Logger is useful for debugging but can be noisy in production
        logger: (m) => console.log(`[Tesseract]: ${m.status} - ${Math.round(m.progress * 100)}%`),
      }
    );

    // 3. Successful Response
    return NextResponse.json<OCRResponse>(
      {
        text: result.data.text,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("OCR API Error:", error);

    // 4. Error Handling
    return NextResponse.json<OCRResponse>(
      {
        error: "Failed to process image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

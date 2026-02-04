import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "LegitLy - AI-Powered Legal Document Verification",
    description: "Verify and understand legal documents instantly. Prevent fraud and reduce anxiety with AI-powered legal comprehension for Indian families.",
    keywords: ["legal documents", "document verification", "AI legal assistant", "India", "fraud prevention"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regex Pattern Tester",
  description: "Test and validate regex patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-gray-50 p-4">
          <h1 className="text-3xl text-center mt-3 mb-3">
            Welcome to Regex Pattern Matcher!
          </h1>
          <p className="text-center text-gray-600 mb-6 w-4/5 mx-auto">
            This is a simple regex pattern matcher built with Next.js, Zustand
            and Tailwind CSS.
            <br />
            This tool helps you create and test regex patterns against sample
            lorem-ipsum documents. In Edit mode, you can add new patterns,
            modify existing patterns, or remove unwanted patterns. In Approve
            mode, you can review and approve pattern matches. The right panel
            displays a sample document that you can use to test your patterns in
            real-time, you can re-generate this anytime. When you update the
            document or patterns, the matches are recalculated and displayed in
            Approve mode.
          </p>
          {children}
        </main>
      </body>
    </html>
  );
}

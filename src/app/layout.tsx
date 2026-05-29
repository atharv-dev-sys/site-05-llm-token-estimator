import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'TokenCalc - LLM VRAM & Token Estimator',
  description: 'Calculate GPU memory requirements for Large Language Models. Estimate VRAM for weights and KV Cache across Llama 3, Mistral, and custom architectures.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'LLM VRAM calculator',
    'GPU memory estimator',
    'AI infrastructure planning',
    'KV Cache calculation',
    'quantization VRAM impact',
    'Llama 3 hardware requirements'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* ✅ Google AdSense script - Using verified template pattern */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6318347746004237"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-6318347746004237" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

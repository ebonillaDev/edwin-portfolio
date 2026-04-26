import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edwin Bonilla",
  description: "Edwin Bonilla is a software engineer who builds intelligent, enterprise-scale applications, blending technical rigor with a passion for AI-driven innovation.",
  metadataBase: new URL('https://edwinbonilla.com'),
  openGraph: {
    title: "Edwin Bonilla",
    description: "Edwin Bonilla is a software engineer who builds intelligent, enterprise-scale applications, blending technical rigor with a passion for AI-driven innovation.",
    url: "https://edwinbonilla.com",
    siteName: "Edwin Bonilla",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Edwin Bonilla - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Bonilla | Software Engineer",
    description: "Edwin Bonilla is a software engineer who builds intelligent, enterprise-scale applications, blending technical rigor with a passion for AI-driven innovation.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ThemeProvider } from "@/components/theme-provider";

import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-beta.vercel.app"),
  title: "Oficial Asif",
  description: "Senior Frontend Engineer Portfolio of Asif Mahmud. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Oficial Asif",
    "oficialasif",
    "Asif Mahmud",
    "asif mahmud",
    "Asif Mahmud Sabuj",
    "asif mahmud sabuj",
    "diuEsport",
    "diu esports community",
    "Asif Daffodil",
    "asif daffodil",
    "Dev Asif",
    "dev asif",
    "Frontend Engineer",
    "Web Developer Bangladesh"
  ],
  authors: [{ name: "Asif Mahmud", url: "https://portfolio-seven-beta.vercel.app" }],
  creator: "Asif Mahmud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-seven-beta.vercel.app",
    title: "Oficial Asif - Frontend Engineer",
    description: "Portfolio of Asif Mahmud, a Senior Frontend Engineer building exceptional digital experiences.",
    siteName: "Oficial Asif",
    images: [
      {
        url: "/projects/diu_esports.png", // Using a project image as fallback OG for now
        width: 1200,
        height: 630,
        alt: "Oficial Asif Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oficial Asif",
    description: "Senior Frontend Engineer Portfolio",
    creator: "@oficialasif", // Assuming handle
    images: ["/projects/diu_esports.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScroll />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeRegistry>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Asif Mahmud",
                  "url": "https://portfolio-seven-beta.vercel.app",
                  "sameAs": [
                    "https://github.com/oficialasif",
                    "https://twitter.com/oficialasif",
                    "https://www.linkedin.com/in/asif-mahmud-sabuj"
                  ],
                  "jobTitle": "Senior Frontend Engineer",
                  "knowsAbout": ["React", "Next.js", "JavaScript", "TypeScript", "UI/UX Design"],
                  "description": "Senior Frontend Engineer specializing in building exceptional digital experiences."
                })
              }}
            />
            {children}
          </ThemeRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}

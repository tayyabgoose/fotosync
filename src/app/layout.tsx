// React and Next.js imports
import type { Metadata } from "next";
import localFont from "next/font/local";

// Styles
import "./globals.css";

// Components
import Nav from "@/components/nav";
import { Providers } from "./providers";
import Footer from "@/components/footer";

// Assets

// Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  title: "FotoSync",
  description: "Your photo sharing platform",
  manifest: "/site.webmanifest",
  icons: {
    apple: [
      {
        url: "/assets/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/assets/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicons/logo.svg", type: "image/svg+xml" },
      {
        url: "/assets/favicons/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/favicons/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  themeColor: "#ffffff",
  appleWebApp: {
    title: "FotoSync",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <header>
            <Nav />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}

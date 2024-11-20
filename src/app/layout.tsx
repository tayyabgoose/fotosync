// React and Next.js imports
import type { Metadata } from "next";
import localFont from "next/font/local";

// Styles
import "./globals.css";

// Components
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // NavbarMenuToggle,
  // NavbarMenu,
  // NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Providers } from "./providers";
import Footer from "@/components/footer";

// Assets
import { FotoSyncLogo } from "@/components/icons/FotoSyncLogo";

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicons/logo.svg", sizes: "any" },
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
    apple: [
      {
        url: "/assets/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <header>
            <Navbar>
              <NavbarBrand className="hidden sm:flex gap-4 justify-start">
                <Link color="foreground" href="/" className="hidden sm:flex">
                  <FotoSyncLogo />
                  <p className="font-bold text-inherit">FotoSync</p>
                </Link>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="/blog">
                    Blog
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    as={Link}
                    color="primary"
                    href="/signup"
                    variant="flat"
                  >
                    Sign Up
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </Navbar>
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

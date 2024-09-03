import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  applicationName: process.env.APP_NAME,
  title: {
    default: process.env.APP_DEFAULT_TITLE as string,
    template: process.env.APP_TITLE_TEMPLATE as string,
  },
  description: process.env.APP_DESCRIPTION as string,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: process.env.APP_DEFAULT_TITLE as string,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: process.env.APP_NAME,
    title: {
      default: process.env.APP_DEFAULT_TITLE as string,
      template: process.env.APP_TITLE_TEMPLATE as string,
    },
    description: process.env.APP_DESCRIPTION as string,
    images: [
      {
        url: "/assests/img/og.png",
        width: 1200,
        height: 630,
        alt: "kuray.dev",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: process.env.APP_DEFAULT_TITLE as string,
      template: process.env.APP_TITLE_TEMPLATE as string,
    },
    description: process.env.APP_DESCRIPTION,
  },
};


export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </head>
      <body className="flex text-base-900 font-sans h-full min-h-screen items-center justify-center transition">
        <div className="lowercase w-full">
          <SessionProvider>
              {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kuray karaaslan - self-taught full-stack developer",
  description:
    "i'm a self-taught full-stack developer with experience in react , java and more. I'm open for new opportunities.",
  openGraph: {
    images: [
      {
        url: "/assests/img/og.png",
        width: 1200,
        height: 630,
        alt: "kuray.dev",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </head>
      <body className="lowercase min-h-screen antialiased bg-base-300  duration-200 transition-all scroll-smooth focus:scroll-auto transition-colors">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </head>
      <body className="flex bg-base-300 text-base-900 font-sans h-full min-h-screen items-center justify-center transition">
        <div className="lowercase w-full">
        {children}
        </div>
      </body>
    </html>
  );
}


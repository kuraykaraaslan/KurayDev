import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "privacy policy - kuray.dev",
  description: "Privacy Policy for kuray.dev",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <article className="bg-base-300 p-0 md:p-8">
        <div className="pt-4 pb-8 px-8  bg-base-200 md:bg-base-100 md:rounded-lg md:shadow-lg md:mx-auto">
          {children}
        </div>
      </article>
    </>
  );
}

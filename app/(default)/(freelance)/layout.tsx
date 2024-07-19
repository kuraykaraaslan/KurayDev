import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "freelance - kuray.dev",
    description: "Work with me on your next project",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}

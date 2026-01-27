import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "Resume of Abdul-Aziz Ziblim - Full-Stack Developer & Mobile Engineer with expertise in React, Next.js, React Native, Python, and Django.",
    openGraph: {
        title: "Resume | Abdul-Aziz Ziblim",
        description: "Resume of Abdul-Aziz Ziblim - Full-Stack Developer & Mobile Engineer.",
    },
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

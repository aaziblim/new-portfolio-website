import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Abdul-Aziz Ziblim for freelance projects, collaborations, or job opportunities. Available for web and mobile development projects.",
    openGraph: {
        title: "Contact | Abdul-Aziz Ziblim",
        description: "Get in touch with Abdul-Aziz Ziblim for freelance projects and collaborations.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

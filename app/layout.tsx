import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "./ui/fonts";
import { MenuBar } from "@/app/ui/components/Footer";

export const metadata: Metadata = {
    title: "Tausiq Samantaray",
    description: "portfolio of tausiq samantaray",
    publisher: "Tausiq Samantaray",
    keywords: [
        "Tausiq Samantaray",
        "portfolio",
        "about",
        "projects",
        "blogs",
        "contact",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                {children}
                <footer>
                    <MenuBar />
                </footer>
            </body>
        </html>
    );
}

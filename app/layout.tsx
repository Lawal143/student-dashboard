import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudentHub",
  description: "My personal student dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
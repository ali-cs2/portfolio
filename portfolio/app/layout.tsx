import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Bashar Alabid | Digital Museum Portfolio",
  description: "3D portfolio museum featuring interactive project panels, awards wall, and certificates."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "My Next App",
  description: "A test of Next.js and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}

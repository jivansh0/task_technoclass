import type { Metadata } from "next";
import "./globals.css";
import { inter } from './fonts';

export const metadata: Metadata = {
  title: "Next App",
  description: "task app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

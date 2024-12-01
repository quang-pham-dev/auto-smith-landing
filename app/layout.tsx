import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/app/typography";

export const metadata: Metadata = {
  title: "Autosmith - Marketing Website Design",
  description: "Find the perfect car for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`font-satoshi antialiased flex flex-col overflow-x-hidden`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

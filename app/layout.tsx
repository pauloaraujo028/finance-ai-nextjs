import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Finance AI",
  description: "Finance AI is a tool that helps you to manage your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="pt-BR">
        <body className={`${mulish.className} dark antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

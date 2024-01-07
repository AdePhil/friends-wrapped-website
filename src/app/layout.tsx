import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./lib/providers";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Friend Wrapped",
  description: "Connect and rate friends",
  keywords: ["Wrapped", "Social app", "Teens"],
  openGraph: {
    title: "Friend Wrapped",
    description: "See your friends wrapped",
    url: "https://www.friendwrapped.com",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.friendwrapped.com/bg.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Setup VN - Gear setup cho content creator",
  description:
    "Mic, đèn, camera và desk setup đáng tiền cho content creator. Cập nhật gear Shopee mỗi ngày.",
  keywords: [
    "creator setup",
    "creatorsetupvn",
    "mic",
    "đèn setup",
    "camera",
    "desk setup",
    "shopee affiliate",
  ],
  openGraph: {
    title: "Creator Setup VN",
    description:
      "Setup cho content creator: mic, đèn, camera và desk setup đáng tiền.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

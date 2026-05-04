import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🔥 Đồ Hay TikTok – Deal Shopee Mỗi Ngày",
  description:
    "Tổng hợp các món đang viral trên TikTok, giá tốt nhất trên Shopee. Cập nhật mỗi ngày!",
  keywords: ["tiktok", "shopee", "deal hot", "đồ hay", "affiliate", "mua sắm"],
  openGraph: {
    title: "🔥 Đồ Hay TikTok – Deal Shopee Mỗi Ngày",
    description: "Tổng hợp các món đang viral, giá tốt trên Shopee 👇",
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

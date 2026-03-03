import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小龙虾 | 你的个人 AI 助手",
  description:
    "小龙虾首页，基于 Next.js 16、Tailwind、shadcn、Drizzle 与 PostgreSQL 构建。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

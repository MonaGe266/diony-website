import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '个人作品集 & 笔记',
  description: '展示个人作品和相关笔记的个人网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

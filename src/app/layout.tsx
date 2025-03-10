import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '个人作品集 & 笔记',
  description: '展示个人作品和相关笔记的个人网站',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
    other: {
      rel: 'icon',
      url: '/logo.svg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}

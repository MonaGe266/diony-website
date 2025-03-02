import React from 'react';
import { motion } from 'framer-motion';

interface Book {
  title: string;
  color: string;
  link: string;
  date: string;
}

const books: Book[] = [
  { title: "Cursor入门指南", color: "#89CFF0", link: "/posts/cursor-guide", date: "2024.02" },
  { title: "Next.js项目搭建", color: "#4A5D4C", link: "/posts/nextjs-setup", date: "2024.02" },
  { title: "Tailwind使用技巧", color: "#B8C4BA", link: "/posts/tailwind-tips", date: "2024.02" },
  { title: "Vercel部署实践", color: "#5F6E62", link: "/posts/vercel-deploy", date: "2024.02" },
  { title: "React Hooks深入", color: "#D8E0D9", link: "/posts/react-hooks", date: "2024.02" },
  { title: "动画效果开发", color: "#89CFF0", link: "/posts/animation", date: "2024.02" },
  { title: "响应式设计", color: "#4A5D4C", link: "/posts/responsive", date: "2024.02" },
  { title: "性能优化笔记", color: "#B8C4BA", link: "/posts/performance", date: "2024.02" },
  { title: "TypeScript技巧", color: "#5F6E62", link: "/posts/typescript", date: "2024.02" },
  { title: "组件化思考", color: "#D8E0D9", link: "/posts/components", date: "2024.02" },
];

export default function Bookshelf() {
  return (
    <div className="w-full py-20 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#4A5D4C] mb-12 text-center">开发笔记</h2>
        <div className="relative h-[400px] perspective-[1000px]">
          {/* 书架背景 */}
          <div className="absolute inset-0 bg-[#E8EDE9] rounded-lg shadow-xl transform rotate-x-[10deg] origin-bottom">
            {/* 木纹纹理 */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D8E0D9]/20 to-[#B8C4BA]/20" />
            {/* 书架隔板 */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#5F6E62]" />
          </div>
          
          {/* 书籍容器 */}
          <div className="relative grid grid-cols-5 gap-4 p-8 transform rotate-x-[10deg] origin-bottom">
            {books.map((book, index) => (
              <motion.a
                key={book.title}
                href={book.link}
                className="relative h-[280px] block group"
                whileHover={{
                  translateY: -20,
                  rotateX: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* 书脊 */}
                <div
                  className="absolute inset-0 rounded shadow-lg transform origin-left transition-transform duration-300"
                  style={{ backgroundColor: book.color }}
                >
                  {/* 书名 */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="text-white font-medium text-sm writing-vertical-lr transform -rotate-180">
                      {book.title}
                    </span>
                  </div>
                  {/* 日期 */}
                  <div className="absolute bottom-2 left-2 text-white/80 text-xs writing-vertical-lr transform -rotate-180">
                    {book.date}
                  </div>
                </div>
                
                {/* 书的侧面 - 只在hover时显示 */}
                <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform origin-right" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
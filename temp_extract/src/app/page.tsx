'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-titanium-50">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="h-screen relative overflow-hidden">
          {/* 银灰色金属质感背景 */}
          <div className="absolute inset-0">
            {/* 基础银灰色渐变 - 增强对比度 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-titanium-100 to-titanium-500" />
            
            {/* 强烈高光和阴影效果 */}
            <div className="absolute inset-0">
              {/* 主要高光区域 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/90 to-transparent transform -skew-x-12" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/80 to-transparent transform skew-y-12" />
              
              {/* 深色阴影区域 - 加深边缘 */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-titanium-500/60 to-titanium-600/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-titanium-600/70 via-transparent to-titanium-600/70" />
              </div>
            </div>
            
            {/* 细微纹理 - 增加对比度 */}
            <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0xIDFMMiAyTTIgMEwzIDFNMCAyTDEgM00yIDJMMyAzIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')]" />
          </div>

          {/* 主要内容 */}
          <div className="relative h-full flex items-center justify-center backdrop-blur-[1px]">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-titanium-800 mb-6">
                  创造独特的数字体验
                </h1>
                <p className="text-xl text-titanium-600">
                  设计师 / 开发者 / 创作者
                </p>

                {/* CTA 按钮 */}
                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-tiffany-300 text-white rounded-lg font-medium hover:bg-tiffany-400 transition-colors shadow-lg"
                  >
                    查看作品集
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-titanium-400 text-titanium-600 rounded-lg font-medium hover:bg-titanium-50/50 transition-colors backdrop-blur-sm"
                  >
                    了解更多
                  </motion.button>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap justify-center gap-4 mt-16">
                  {[
                    { text: 'cursor笔记', link: '/notes' },
                    { text: '我的Youtube', link: '/channel' }
                  ].map((item, index) => (
                    <motion.a
                      key={item.text}
                      href={item.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full text-base text-titanium-600 border border-titanium-200 shadow-sm hover:bg-white/90 hover:text-titanium-800 transition-all"
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* 向下滚动提示 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-tiffany-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>
      </main>
    </div>
  );
} 
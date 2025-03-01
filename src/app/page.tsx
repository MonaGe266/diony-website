'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="h-screen relative overflow-hidden">
          {/* 柔和的背景 */}
          <div className="absolute inset-0">
            {/* 基础渐变 */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-titanium-200" />
            
            {/* 高光和阴影效果 */}
            <div className="absolute inset-0">
              {/* 主要高光区域 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/90 to-transparent transform -skew-x-12" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-secondary/80 to-transparent transform skew-y-12" />
              
              {/* 深色阴影区域 */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-titanium-300/30 to-titanium-400/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-titanium-300/30 via-transparent to-titanium-300/30" />
              </div>
            </div>
            
            {/* 细微纹理 */}
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
                <h1 className="text-5xl md:text-6xl font-bold text-titanium-700 mb-6">
                  创造独特的数字体验
                </h1>
                <p className="text-xl text-titanium-600">
                  独立开发者
                </p>

                {/* CTA 按钮 */}
                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-monkey-300 text-white rounded-lg font-medium hover:bg-monkey-400 transition-colors shadow-lg"
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
                      className="px-6 py-3 bg-secondary/70 backdrop-blur-sm rounded-full text-base text-titanium-600 border border-titanium-200 shadow-sm hover:bg-white/90 hover:text-titanium-700 transition-all"
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
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-monkey-400"
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
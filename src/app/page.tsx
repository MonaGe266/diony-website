'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Bookshelf from '../components/Bookshelf';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8EDE9]">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="h-screen relative overflow-hidden">
          {/* 柔和的背景 */}
          <div className="absolute inset-0">
            {/* 基础渐变 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-[#E8EDE9] to-[#D8E0D9]" />
            
            {/* 高光和阴影效果 */}
            <div className="absolute inset-0">
              {/* 主要高光区域 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F4F6F8]/90 to-transparent transform -skew-x-12" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#F4F6F8]/80 to-transparent transform skew-y-12" />
              
              {/* 深色阴影区域 */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B8C4BA]/30 to-[#9BA89E]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8C4BA]/30 via-transparent to-[#B8C4BA]/30" />
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
                <h1 className="text-5xl md:text-6xl font-bold text-[#4A5D4C] mb-6">
                  创造独特的数字体验
                </h1>
                <p className="text-xl text-[#5F6E62]">
                  独立开发者
                </p>

                {/* CTA 按钮 */}
                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: 'rgb(137, 207, 240)', color: 'rgb(255, 255, 255)' }}
                    className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    查看作品集
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgb(137, 207, 240)',
                      color: 'rgb(137, 207, 240)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ 
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'rgb(155, 168, 158)',
                      color: 'rgb(95, 110, 98)'
                    }}
                    className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#F8FAF8]/50 backdrop-blur-sm"
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
                      style={{
                        backgroundColor: 'rgba(244, 246, 248, 0.7)',
                        color: 'rgb(95, 110, 98)',
                        borderColor: 'rgb(216, 224, 217)'
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgb(137, 207, 240)',
                        color: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(137, 207, 240)'
                      }}
                      className="px-6 py-3 backdrop-blur-sm rounded-full text-base border shadow-sm transition-all duration-300"
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
            style={{ color: 'rgb(137, 207, 240)' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* 书架部分 */}
        <Bookshelf />
      </main>
    </div>
  );
} 
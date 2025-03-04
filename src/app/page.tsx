'use client';

import React, { useEffect } from 'react';
import type { FC } from 'react';
import Navigation from '@/components/Navigation';
import Bookshelf from '@/components/Bookshelf';

const Home: FC = () => {
  useEffect(() => {
    console.log('Home page loaded');
  }, []);
  
  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] mb-6">
              欢迎来到我的个人空间
            </h1>
            <p className="text-xl md:text-2xl text-[#4A5568] max-w-3xl mx-auto">
              这里是我分享创意、项目和想法的地方
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Works Section */}
      <section id="works" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D3748] mb-12">
            精选作品
          </h2>
          <Bookshelf />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
              关于我
            </h2>
            <p className="text-lg text-[#4A5568] mb-6">
              我是一名热爱创造和分享的开发者，专注于打造美观且实用的数字体验。
            </p>
            <p className="text-lg text-[#4A5568]">
              通过这个网站，我希望能够展示我的项目作品，分享我的学习笔记和经验。
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
            联系我
          </h2>
          <p className="text-lg text-[#4A5568] mb-8">
            如果您有任何问题或合作意向，欢迎随时联系我
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="inline-block bg-[#89CFF0] hover:bg-[#5DADE2] text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            发送邮件
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#2D3748] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} 个人作品集. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home; // 添加一个注释

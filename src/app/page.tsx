'use client';

import React from 'react';
import type { FC } from 'react';
import Navigation from '@/components/Navigation';
import Bookshelf from '@/components/Bookshelf';

const Home: FC = () => {
  console.log('Testing with Navigation component');
  
  return (
    <div className="min-h-screen bg-blue-100">
      <Navigation />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">测试页面</h1>
          <p className="mb-4">这是一个简单的测试页面，用于排查渲染问题</p>
          <div className="p-4 bg-green-100 rounded">
            如果您能看到这个内容，说明基本渲染正常
          </div>
          <div className="mt-8">
            <Bookshelf />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: '首页' },
    { href: '/works', label: '作品集' },
    { href: '/notes', label: '笔记' },
    { href: '/about', label: '关于我' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#F4F6F8]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#works" className="text-[#5F6E62] hover:text-[#89CFF0] transition-colors">
              作品
            </a>
            <a href="#about" className="text-[#5F6E62] hover:text-[#89CFF0] transition-colors">
              关于
            </a>
            <a href="#contact" className="text-[#5F6E62] hover:text-[#89CFF0] transition-colors">
              联系
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 
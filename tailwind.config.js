/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8EDE9",    // 柔和的浅绿色背景
        accent: "#89CFF0",     // 亮蓝色（蛋蛋色）
        secondary: "#F4F6F8",  // 柔和的白色（绒毛色）
        highlight: "#FF6B6B",  // 点缀红色（舌头色）
        titanium: {
          50: "#F8FAF8",      // 最亮的绿白色高光
          100: "#E8EDE9",     // 浅绿色
          200: "#D8E0D9",     // 珍珠绿
          300: "#B8C4BA",     // 中绿灰
          400: "#9BA89E",     // 深绿灰
          500: "#7D8C80",     // 主绿色调
          600: "#5F6E62",     // 暗绿色
          700: "#4A5D4C",     // 深绿（原主色）
          800: "#374539",     // 暗绿
          900: "#242D25"      // 最深
        },
        monkey: {
          50: "#F0F9FF",      // 最浅蓝色
          100: "#E0F2FE",     // 浅蓝色
          200: "#B9E6FE",     // 珍珠蓝
          300: "#89CFF0",     // 特征性蓝色（蛋蛋色）
          400: "#5DB8E6",     // 中蓝色
          500: "#38A3DC",     // 主蓝色调
          600: "#2B8EC2",     // 深蓝色
          700: "#1E79A8",     // 更深蓝色
          800: "#11648E",     // 暗蓝色
          900: "#044F74"      // 最深蓝色
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 
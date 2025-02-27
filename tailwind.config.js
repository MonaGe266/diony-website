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
        primary: "#4A5D4C",    // 青腹绿猴主体毛色
        accent: "#89CFF0",     // 特征性蓝色区域
        secondary: "#6B7280",  // 中性灰色
        titanium: {
          50: "#FAFBFC",      // 最亮的银色高光
          100: "#F0F2F5",     // 浅银色
          200: "#E2E5E9",     // 珍珠银
          300: "#C5CCD3",     // 中银灰
          400: "#A7B0B8",     // 深银灰
          500: "#8B959E",     // 主银色调
          600: "#6E7780",     // 暗银色
          700: "#515960",     // 深灰
          800: "#373D42",     // 暗灰
          900: "#21252A"      // 最深
        },
        tiffany: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#B9E6FE",
          300: "#89CFF0",      // 特征性蓝色
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E"
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
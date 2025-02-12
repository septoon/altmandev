/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-transparent"],
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      animation: {
        scan: 'scan 2s linear infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        slideUp: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        slideInLeft: 'slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        slideInRight: 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        scaleUp: 'scaleUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100px) rotate(-5deg)', 
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translateY(0) rotate(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-200px) skew(20deg)', 
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translateX(0) skew(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(200px) skew(-20deg)', 
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translateX(0) skew(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        scaleUp: {
          '0%': { 
            transform: 'scale(0.5) rotate(-10deg)', 
            opacity: '0',
            filter: 'blur(10px)'
          },
          '70%': { 
            transform: 'scale(1.05) rotate(2deg)', 
            opacity: '0.7'
          },
          '100%': { 
            transform: 'scale(1) rotate(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '0.9'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      backgroundImage: {
        'main': "url('/main.webp')",
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: 'transparent',
        primary: '#1E90FF',
        main: '#007da0',
        secondary: '#6fd9e5',
        back: '#21A599',
        bgOrder: '#EFEFF4',
        bgInput: '#EBEBEE',
        historyBtn: '#EAB68F',
        slideBg: '#f0f0f0',
        quinary: '#8A2BE2',
        senary: '#00FF7F',
        septenary: '#FF69B4',
        octonary: '#FF4500',
        nonary: '#9370DB',
        closeCircle: '#20B2AA',
        darkAdmin: "#131922",
        light: 'F7F9FA',
        white: '#ffffff',
        black: '#000000',
        mainBg: '#bf6850',
        mainBgMiddle: '#ba7b6a',
        mainBgStart: '#ba9084',
        darkSwitch: '#2b2b2f',
        purple: '#3f3cbb',
        blue: '#316ff4',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silverAdmin: '#f0eef6',
        bubblegum: '#ff77e9',
        bermuda: '#78dcca',
        gray: '#808080',
        gray300: '#E0E0E0',
        gray500: '#9E9E9E',
        lightGray: '#D3D3D3',
        lightSlateGray: '#778899',
        darkGray: '#141616',
        veryDarkGray: '#272822',
        DimGray: '#696969',
        red: '#FF0000',
        orange: '#FFA500',
        orange600: '#FB8C00',
        dark: "#1d1d1d",
        silver: '#ecebff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

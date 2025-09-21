/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(164, 118, 255, 0.5), 0 0 10px rgba(164, 118, 255, 0.3), 0 0 15px rgba(164, 118, 255, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(164, 118, 255, 0.8), 0 0 20px rgba(164, 118, 255, 0.5), 0 0 30px rgba(164, 118, 255, 0.3)'
          },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-left': 'fade-in-left 0.6s ease-out',
        'fade-in-right': 'fade-in-right 0.6s ease-out',
        'bounce-slow': 'bounce-slow 3s infinite',
        'pulse-slow': 'pulse-slow 4s infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(164, 118, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(164, 118, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← AÑADE ESTA LÍNEA
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'fadeIn': 'fadeIn 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Nuevas animaciones para el blog
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        // Nuevos keyframes para el blog
        slideUp: {
          'from': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        gradientShift: {
          '0%, 100%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0)' 
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(10px)' 
          },
        },
        shimmer: {
          '0%': { 
            transform: 'translateX(-100%) skewX(-12deg)' 
          },
          '100%': { 
            transform: 'translateX(200%) skewX(-12deg)' 
          },
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)' 
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)' 
          },
          '70%': { 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)' 
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // Opcional: Agregar delays de animación
      transitionDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      }
    },
  },
  plugins: [],
}
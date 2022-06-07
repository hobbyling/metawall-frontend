const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#C77174',
          700: '#E9888C',
          500: '#FF9A9E',
          300: '#F4C0C2',
          100: '#ECD4D5'
        },
        secondary: '#A7DAD8',
        background: '#F6F6F6',
        title: '#666666'
      },
      padding: {
        '30px': '30px',
      },
      borderRadius: {
        DEFAULT: '18px',
        '12px': '12px'
      },
      height: {
        '42': '42px',
      },
      width: {
        '345': '345px',
        '419': '419px',
        '440': '440px'
      },
      boxShadow: {
        DEFAULT: '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: '22px',
          fontWeight: theme('fontWeight.bold')
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold')
        },
        'a': {
          color: '#A7DAD8'
        }
      })
    })
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF4F6',
          100: '#F7EBEF',
          200: '#EABECB',
          300: '#DD92A7',
          400: '#B8456C',
          500: '#8F2548',
          600: '#7A1F3D', // Primary brand Burgundy
          700: '#631831',
          800: '#4D1225',
          900: '#350A19',
          950: '#20050E',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF8F0', // Brand Cream/Ivory
          300: '#F8EFE3',
          400: '#F0E5D4',
        },
        beige: {
          DEFAULT: '#EADCCF', // Soft beige
          50: '#FAF7F3',
          100: '#F5EFE8',
          200: '#EADCCF',
          300: '#DFC8B4',
          400: '#D2B397',
        },
        charcoal: {
          DEFAULT: '#222222',
          light: '#3A3A3A',
          muted: '#666666',
          border: '#E5E0DA',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#E2CEB5',
          dark: '#A48256',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(122, 31, 61, 0.12)',
        'luxury-hover': '0 20px 40px -15px rgba(122, 31, 61, 0.22)',
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'festive-pattern': "radial-gradient(#7A1F3D 0.75px, transparent 0.75px)",
      }
    },
  },
  plugins: [],
}

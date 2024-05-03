/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/*.blade.php",
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        animation: {
            wiggle: 'wiggle 20s ease-in-out infinite',
            wiggleSlow: 'wiggle 40s ease-in-out infinite',
            wiggleNormal: 'wiggle 30s ease-in-out infinite',
            wiggleLeft: 'wiggleLeft 20s ease-in-out infinite',
            wiggleSlowLeft: 'wiggleLeft 40s ease-in-out infinite',
            wiggleNormalLeft: 'wiggleLeft 30s ease-in-out infinite',
        },
        keyframes: {
            wiggle: {
                '0%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(-50%)' },
                '100%': { transform: 'translateX(0%)' },
            },
            wiggleLeft: {
                '0%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(-50%)' },
                '100%': { transform: 'translateX(0%)' },
            }
        }
    },
  },
  plugins: [],
}


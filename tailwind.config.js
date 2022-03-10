module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { left: '-100px' },
          '25%': { transform: 'rotate(30deg)', top: '50%' },
          '50%': { transform: 'rotate(45deg)', top: '55%' },
          '75%': { transform: 'rotate(30deg)', top: '60%' },
          '100%': { transform: 'rotate(45deg)', left: '100%' },
        },
      },
    },
  },
  plugins: [],
};

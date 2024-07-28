// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // For the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // For the components directory
    './app/**/*.{js,ts,jsx,tsx}', // If you're using the /app directory
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
        body: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    //   colors: {
    //     'navFontUnselected': "#8a8d93",
    //   }
    // },
  },
  plugins: [require('@tailwindcss/forms')],
}

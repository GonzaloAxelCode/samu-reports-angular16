/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
    "./src/app/components/**/*.{html,ts}",
    "./src/app/modules/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "10xl": "75px",
      },
      screens: {
        sm: "640px", // Breakpoint personalizado para pantallas pequeñas
        md: "768px", // Breakpoint personalizado para pantallas medianas
        mdd: "869px", // Breakpoint personalizado para pantallas medianas
        lg: "1024px", // Breakpoint personalizado para pantallas grandes
      },
    },
  },
  plugins: [],
};

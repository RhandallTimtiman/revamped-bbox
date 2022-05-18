module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2A2E43",
        secondary: "#08527F",
        active: "#1AA0D9",
        danger: "#FE3D71",
        default: "#1895FF",
      },
      borderColor: (theme) => ({
        primary: "#2A2E43",
        secondary: "#08527F",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

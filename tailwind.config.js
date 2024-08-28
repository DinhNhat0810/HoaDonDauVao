/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('./src/assets/images/auth/bg.jpg')",
      },
      colors: {
        "primary-color": "#de3f0f",
        "gray-color": "#bdbdbf",
        "black-color": "#000",
        "infor-color": "#38a4dd",
        "success-color": "#4caf4e",
        "warning-color": "#f9bf2c",
        "error-color": "#ef5451",
      },
      boxShadow: {
        custom: "0px 4px 19px 0px rgba(184, 184, 184, 0.25)",
      },

      fontFamily: {
        "body-large-medium": "var(--body-large-medium-font-family)",
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-medium-medium": "var(--body-medium-medium-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "caption-small-medium": "var(--caption-small-medium-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
      },
    },
  },
  plugins: [],
};

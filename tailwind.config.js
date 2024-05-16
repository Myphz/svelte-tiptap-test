/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      header: "'Space Grotesk', sans-serif",
      body: "'Geist', sans-serif"
    },
    fontSize: {
      h1: ["2.5625rem", { fontWeight: "700" }],
      h2: ["2.0625rem", { fontWeight: "500" }],
      body: ["1.625rem", { fontWeight: "400" }],
      small: ["1.375rem", { fontWeight: "400" }],
      "small-header": ["1.375rem", { fontWeight: "500" }],
      xs: ["1.125rem", { fontWeight: "400" }]
    },
    colors: {
      text: "#F5F4F4",
      "text-secondary": "#A09898",
      success: "#50a650",
      divider: "#575655",
      primary: "#F59C51",
      secondary: "#EF4A45",
      active: "#9c5034",
      black: "#000",
      tertiary: "#381C19",
      background: "#110F0D",
      "background-secondary": "#171412"
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};

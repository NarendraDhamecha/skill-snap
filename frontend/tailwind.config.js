const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite-react/**/*.js", // Add flowbite-react components
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("flowbite/plugin"), // Add the Flowbite plugin
//   ],
// };

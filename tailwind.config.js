/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
		fontFamily: {
			roboto: ["Roboto"],
			poppins: ["Poppins"],
		},
		colors: {
			primary: "#0e7490",
			primaryDark: "#06333f",
			light: "#eaeaea",
		},
	},
  },
  plugins: [],
};


module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // art1: "url('https://images.pexels.com/photos/4992709/pexels-photo-4992709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        art1: "url('/src/Components/Images/art1.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

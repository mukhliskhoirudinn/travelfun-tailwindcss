/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,js}",
      "./*.html", // Untuk semua file HTML di root directory
   ],
   theme: {
      container: {
         center: true,
         padding: "16px",
      },
      extend: {
         screens: {
            "2xl": "1320px",
         },
         colors: {
            orange: "#FF4900",
            abu: "#EAEAEA",
         },
         fontFamily: {
            taprom: "Taprom",
            poppins: "Poppins",
         },
      },
   },
   plugins: [],
};

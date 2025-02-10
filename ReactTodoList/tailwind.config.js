/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      titleone:["sans","serif"],
      title:["Protest Guerrilla","serif"] //burada "title" əvəzinə nə istəsək yaza bilərik. Məsələn bütün title-lara eyni font-u vermək istəyiriksə "title" yazırıq. "Protest Guerrilla" isə götürdüyümüz font-un adıdır.
    },
    boxShadow:{
      '3xl':'0 14px 70px -52px #433d3dde'
    },
    extend: {
      backgroundImage: {
         'background': "url('./assets/copy.png')",
        }
    },
  },
  plugins: [],
}


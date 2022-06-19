module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee', 
    'emerald', 
    'corporate', 
    'synthwave', 
    'retro', 
    'cyberpunk', 
    'valentine', 
    'halloween', 
    'garden', 
    'forest', 
    'aqua', 
    'lofi', 
    'pastel', 
    'fantasy', 
    'wireframe', 
    'black', 
    'luxury', 
    'dracula', 
    'cmyk'
      ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
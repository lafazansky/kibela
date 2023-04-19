module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        yaleBlue: 'hsl(219, 78%, 28%)',
        tangBlue: 'hsl(219, 78%, 44%)',
        oxfordBlue: 'hsl(220, 77%, 12%)',
        naplesYellow: 'hsl(49, 90%, 62%)',
        jonquil: 'hsl(49, 90%, 52%)', 
      },
      
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Exo', 'sans-serif'],
  bodyFontFamily: ['Yrsa', 'georgia', 'sans-serif'],
  googleFonts: [
    {
      name: 'Exo',
      styles: ['700'],
    },
    {
      name: 'Yrsa',
      styles: ['400', '700'],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography

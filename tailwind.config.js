/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js', 
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    fontSize: {
      h1: ['4em', { lineHeight: '1.3em', letterSpacing: '-0.03em', fontWeight: 'bold' }],
      h2: ['2.75em', { lineHeight: '1.3em', letterSpacing: '-0.03em', fontWeight: 'bold' }],
      h3: ['1.5em', { lineHeight: '1.3em', letterSpacing: '-0.03em', fontWeight: 'bold' }],
      h4: ['1.25em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      h5: ['1.125em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      h6: ['1em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      h7: ['0.85em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      l1: ['1.125em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      l2: ['1em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      l3: ['0.85em', { lineHeight: '1.3em', fontWeight: 'bold' }],
      p1: ['1.125em', { lineHeight: '1.3em' }],
      p2: ['1em', { lineHeight: '1.3em' }],
      p3: ['0.85em', { lineHeight: '1.3em' }],
      p4: ['0.75em', { lineHeight: '1.3em' }],
    },
    fontFamily: {
      EBold: 'EudoxusSansBold, sans',
      EReguler: 'EudoxusSansRegular, sans',
      EMedium: 'EudoxusSansMedium, sans',
    },
    extend: {
      colors: {
        primary: '#518581',
        secondary: '#FFB23F',
        black: '#151411',
        gray: {
          800: '#AFADB5',
          700: '#BCBBC1',
          600: '#CAC8CE',
          500: '#D7D6DA',
          400: '#E4E4E6',
          100: '#EFEFF0',
        },
        white: '#F9F9F9',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#518581",
          "secondary": "#FFB23F",                  
          "accent": "#37CDBE",                  
          "neutral": "#3D4451",                  
          "base-100": "#FFFFFF",                  
          "info": "#3ABFF8",                  
          "success": "#36D399",                  
          "warning": "#FBBD23",                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}

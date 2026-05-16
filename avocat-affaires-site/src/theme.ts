import { createTheme } from '@mui/material/styles'

const navy = '#0a1628'
const parchment = '#f7f5f0'
const gold = '#b8923a'

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: navy, contrastText: '#faf8f4' },
    secondary: { main: gold, contrastText: navy },
    background: { default: parchment, paper: '#ffffff' },
    text: { primary: '#1a1f26', secondary: '#4a5568' },
  },
  typography: {
    fontFamily: '"Source Sans 3", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 600,
      fontSize: '1.35rem',
    },
    subtitle1: { fontSize: '1.1rem', lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          paddingInline: 22,
          '&.MuiButton-containedSecondary': {
            color: navy,
            '&:hover': { backgroundColor: '#c9a34d' },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
  },
})

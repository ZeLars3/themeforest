import { createTheme } from '@mui/material/styles'

const shadows = {
  shadowButton:
    'box-shadow: 0px 12rpx 3px rgba(24, 92, 255, 0.18);',
  shadowCard1:
    'box-shadow: 0 2px 20px 17px rgba(24, 92, 255, 0.04);',
  shadowCard2:
    'box-shadow: 0 12px 30px 17px rgba(24, 92, 255, 0.04);',
  shadowCard3:
    'box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);',
  shadowDropdown:
    'box-shadow: 0 2px 6px rgba(0, 43, 78, 0.15), 0 1px 2px rgba(0, 43, 78, 0.3);',
}

const colors = {
  primary: '#185CFF',
  hover: '#467DFF',
  secondary: '#002B4E',
  tertiary: '#F0F9FF',
  helperBlue: '#194060',
  helperBlue2: '#607D94',
  helperBlue3: '#C9DCEC',
  black: '#292D33',
  white: '#ffffff',
  grey: '#9497A1',
  background: '#F1F6FA',
  red: '#C14040',
  backgroundModal: '#d4d4d4a4',
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#185CFF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9497A1',
      contrastText: '#fff',
    },
    success: {
      main: '#607D94',
      contrastText: '#fff',
    },
    error: {
      main: '#C14040',
      contrastText: '#fff',
    },
    text: {
      primary: '#292D33',
      secondary: '#9497A1',
    },
    common: {
      white: '#fff',
    },
  },
  typography: {
    fontSize: 14,
    allVariants: {
      color: '#292D33',
    },
    subtitle1: {
      color: '#9497A1',
      fontSize: '14px',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.015em',
    },
    body1: {
      color: '#9497A1',
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '-0.015em',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '28px',
    },
    h1: {
      fontSize: '46px',
      fontWeight: 800,
      lineHeight: '60px',
    },
    h2: {
      fontSize: '38px',
      fontWeight: 800,
      lineHeight: '56px',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 800,
      lineHeight: '42px',
    },
    h4: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '33px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '33px',
      color: '#9497A1',
      letterSpacing: '-0.015em',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
    button: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#FFFFFF',
      textTransform: 'initial',
    },
  },
})

export default {
  shadows,
  colors,
  customTheme,
}

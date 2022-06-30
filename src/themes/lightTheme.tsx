import { createTheme } from '@mui/material/styles'

const TITLE_FONT = "'Lekton', monospace"
const BODY_FONT = "'Open Sans', sans-serif"

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#A6BBF5',
    },
    secondary: {
      main: '#C2B49E',
    },
    action: {
      active: '#000000d4',
    },
    background: {
      default: '#ECECEC',
      paper: '#ECECEC',
    },
  },
  typography: {
    fontFamily: BODY_FONT,
    fontSize: 20,
    h1: {
      fontFamily: TITLE_FONT,
      fontSize: 103,
      letterSpacing: '-0.15rem',
    },
    h2: {
      fontFamily: TITLE_FONT,
      fontSize: 64,
      letterSpacing: '-.05rem',
    },
    h3: {
      fontFamily: TITLE_FONT,
      fontSize: 51,
    },
    h4: {
      fontFamily: TITLE_FONT,
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '.1rem',
    },
    h4Caps: {
      fontFamily: TITLE_FONT,
      fontSize: 36,
      lineHeight: '42px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: TITLE_FONT,
      fontSize: 28,
      fontWeight: 700,
    },
    h5Caps: {
      fontFamily: TITLE_FONT,
      fontSize: 28,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: TITLE_FONT,
      fontSize: 23,
      fontWeight: 700,
      letterSpacing: '.015rem',
      lineHeight: 'normal',
    },
    h6Caps: {
      fontFamily: TITLE_FONT,
      fontSize: 23,
      fontWeight: 700,
      letterSpacing: '.015rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontWeight: 300,
      letterSpacing: '.01rem',
    },
    bodyImpact: {
      fontFamily: TITLE_FONT,
      fontWeight: 700,
      letterSpacing: '.15rem',
      fontSize: 24,
    },
    bodySmall: {
      fontSize: 16,
      letterSpacing: '.025rem',
    },
    bodyCaps: {
      fontSize: 13,
      fontWeight: 300,
      letterSpacing: '.15rem',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: 17,
      fontFamily: TITLE_FONT,
      letterSpacing: '.015rem',
    },
    subtitleSmall: {
      fontSize: 15,
      fontFamily: TITLE_FONT,
      letterSpacing: '.01rem',
    },
    button: {
      fontSize: 14,
      fontFamily: TITLE_FONT,
      fontWeight: 700,
    },
    buttonCaps: {
      fontSize: 14,
      fontFamily: TITLE_FONT,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 10,
    },
    overline: {
      fontFamily: TITLE_FONT,
      fontSize: 14,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#ECECEC',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 16,
        },
      },
    },
    MuiListItemButton: {
      variants: [
        {
          props: { variant: 'centered' },
          style: {
            textAlign: 'center',
          },
        },
      ],
    },
    MuiListItemIcon: {
      variants: [
        {
          props: { variant: 'centered' },
          style: {
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
})

export default lightTheme

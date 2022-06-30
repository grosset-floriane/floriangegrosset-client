import { Theme } from '@mui/material/styles'




declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface 
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}
declare module '@mui/material/ListItemButton' {
  interface ListItemButtonBaseProps {
    variant?: 'centered'
  }
}

declare module '@mui/material/ListItemIcon' {
  interface ListItemIconProps {
    variant?: 'centered'
  }
}


declare module '@mui/material/styles' {
  interface TypographyVariants {
    h4Caps: React.CSSProperties
    h5Caps: React.CSSProperties
    h6Caps: React.CSSProperties
    bodyImpact: React.CSSProperties
    bodySmall: React.CSSProperties
    bodyCaps: React.CSSProperties
    subtitle: React.CSSProperties
    subtitleSmall: React.CSSProperties
    buttonCaps: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h4Caps?: React.CSSProperties
    h5Caps?: React.CSSProperties
    h6Caps?: React.CSSProperties
    bodyImpact?: React.CSSProperties
    bodySmall?: React.CSSProperties
    bodyCaps?: React.CSSProperties
    subtitle?: React.CSSProperties
    subtitleSmall?: React.CSSProperties
    buttonCaps?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h4Caps: true
    h5Caps: true
    h6Caps: true
    bodyImpact: true
    bodySmall: true
    bodyCaps: true
    subtitle: true
    subtitleSmall: true
    buttonCaps: true
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    background: true;
  }
}

import merge from 'deepmerge'
import {
  palette,
  typography,
  spacing,
  Spacing,
} from '@sprinkly/tokens'

type TypographyVariant = {
  fontFamily: string
  fontSize: string
}

export type Theme = {
  palette: {
    type: string
    primary: palette.Color & {
      main: string
    }
    secondary: palette.Color & {
      main: string
    }
    text: {
      primary: string
    },
    background: {
      default: string
      surface: string
    },
    gray: palette.Color
  }
  typography: {
    h1: TypographyVariant
    h2: TypographyVariant
    h3: TypographyVariant
    h4: TypographyVariant
    h5: TypographyVariant
    h6: TypographyVariant
    body: TypographyVariant
  }
  spacing: Spacing
}

type DeepPartial<T> = {
  [K in keyof T]?: DeepPartial<T[K]>
}

export type ThemeOptions = DeepPartial<Theme>

export function createTheme(options: ThemeOptions = {}): Theme {
  const themeType = options?.palette?.type || 'light'

  const theme: Theme = {
    palette: {
      type: themeType,
      primary: {
        main: themeType === 'light' ? palette.teal[500] : palette.teal[300],
        ...palette.teal,
      },
      secondary: {
        main: themeType === 'light' ? palette.teal[500] : palette.teal[300],
        ...palette.teal,
      },
      background: {
        surface: themeType === 'light' ? palette.white : palette.gray[700],
        default: themeType === 'light' ? palette.gray[50] : palette.gray[800],
      },
      text: {
        primary: themeType === 'light' ? palette.gray[800] : palette.white,
      },
      gray: palette.gray,
    },
    typography: {
      h1: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes['4xl'],
      },
      h2: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes['3xl'],
      },
      h3: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes['2xl'],
      },
      h4: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes.xl,
      },
      h5: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes.lg,
      },
      h6: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes.base,
      },
      body: {
        fontFamily: typography.fonts.system,
        fontSize: typography.fontSizes.base,
      },
    },
    spacing,
  }

  return merge(theme, options) as Theme
}

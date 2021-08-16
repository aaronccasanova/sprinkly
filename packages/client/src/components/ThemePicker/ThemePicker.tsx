import React from 'react'
import * as styles from './ThemePicker.css'

import { themeClasses } from './theme.css'

export const themeKey = 'sprinkly-theme'

type Theme = keyof typeof themeClasses
type Themes = Theme[]

const themes = Object.keys(themeClasses) as Themes

export function isSprinklyTheme(theme: string): theme is Theme {
  return themes.includes(theme as Theme)
}

export interface ThemePickerContextValue {
  theme: Theme | undefined
  themes: Themes | undefined
  themeClass: string
  setTheme: (theme: Theme) => void
}

export const ThemePickerContext = React.createContext<ThemePickerContextValue>({
  theme: undefined,
  themes: undefined,
  themeClass: themes[0],
  setTheme: () => {},
})

export function useTheme() {
  const context = React.useContext(ThemePickerContext)
  return context
}

export interface ThemePickerProviderProps {
  children: React.ReactNode
}

export function ThemePickerProvider(props: ThemePickerProviderProps) {
  const [theme, setTheme] = React.useState<Theme>()

  React.useEffect(() => {
    const sprinklyTheme = localStorage.getItem('sprinkly-theme')
    
    if (!sprinklyTheme || !isSprinklyTheme(sprinklyTheme)) {
      const newTheme = matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      setTheme(newTheme)

      localStorage.setItem('sprinkly-theme', newTheme)
    } else {
      setTheme(sprinklyTheme)
    }
  }, [])

  function handleSetTheme(newTheme: Theme) {
    if (isSprinklyTheme(newTheme)) {
      setTheme(newTheme)

      try {
        localStorage.setItem(themeKey, newTheme)
      } catch (e) {}
    }
  }

  return (
    <ThemePickerContext.Provider
      value={{
        theme,
        themes,
        themeClass: themeClasses[theme || themes[0]],
        setTheme: handleSetTheme,
      }}
    >
      {props.children}
    </ThemePickerContext.Provider>
  )
}

export const ThemePicker = () => {
  const { theme, themes, setTheme } = useTheme()

  return (
    <span className={styles.root}>
      <select
        className={styles.select}
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        {themes?.map(theme => (
          <option key={theme} value={theme}>{theme}&nbsp;</option>
        ))}
      </select>
    </span>
  )
}

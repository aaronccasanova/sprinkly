import { createTheme as veCreateTheme } from '@vanilla-extract/css'
import { createTheme, vars } from '@sprinkly/theme'

export { vars } from '@sprinkly/theme'

const lightTheme = veCreateTheme(vars, createTheme())

const darkTheme = veCreateTheme(vars, createTheme({
	palette: {
		type: 'dark',
	},
}))

const dimTheme = veCreateTheme(vars, createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#ec5d10',
		},
		text: {
			primary: '#0d0d0d',
		},
		background: {
			default: '#97c4bf',
			surface: '#f6f8f2',
		}
	},
}))

const forestTheme = veCreateTheme(vars, createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#ff9643',
		},
		background: {
			default: '#1E2D24',
			surface: '#334139',
		},
		text: {
			primary: '#F6F0ED',
		},
	},
}))

export const themeClasses = {
	light: lightTheme,
	dark: darkTheme,
	dim: dimTheme,
	forest: forestTheme,
}

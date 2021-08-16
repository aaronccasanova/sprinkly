import { style } from '@vanilla-extract/css'
import { vars } from '../ThemePicker'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
	minHeight: '100vh',
  backgroundColor: vars.palette.background.default,
})

import { style } from '@vanilla-extract/css'
import { vars } from '../ThemePicker'

export const root = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	color: vars.palette.text.primary,
	borderBottom: `1px solid ${vars.palette.text.primary}`,
	marginBottom: 12,
})

export const heading = style({
	margin: 8,
})

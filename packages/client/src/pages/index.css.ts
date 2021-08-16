import { style } from '@vanilla-extract/css'
import { vars } from '@sprinkly/theme'

export const container = style({
	flex: '1 1 100%',
	display: 'grid',
	placeContent: 'center',
})

export const box = style({
	textAlign: 'center',
	padding: '12px 40px',
  border: `1px solid ${vars.palette.primary.main}`,
	outline: `3px solid ${vars.palette.primary.main}`,
	outlineOffset: 4,
})

export const heading = style({
	marginBottom: 4,
})

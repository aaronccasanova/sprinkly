import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@sprinkly/theme'

export const variants = styleVariants({
	h1: vars.typography.h1,
  h2: vars.typography.h2,
	h3: vars.typography.h3,
	h4: vars.typography.h4,
	h5: vars.typography.h5,
	h6: vars.typography.h6,
	body: vars.typography.body,
})

export const colors = styleVariants({
	textPrimary: { color: vars.palette.text.primary },
	primary: { color: vars.palette.primary.main },
  secondary: { color: vars.palette.secondary.main },
	white: { color: vars.palette.gray[50] },
	black: { color: vars.palette.gray[900] },
})

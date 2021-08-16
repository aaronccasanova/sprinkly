import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const root = style({
  display:'inline-block',
  margin: 8,
  padding: '0 8px',
  border: `1px solid ${vars.palette.text.primary}`,
  backgroundColor: vars.palette.background.surface,
  ':focus-within': {
    border: `1px solid ${vars.palette.primary.main}`,
    outline: `1px solid ${vars.palette.primary.main}`,
  },
})

export const select = style({
  fontSize: 20,
  padding: '8px 0px',
  color: vars.palette.text.primary,
  textTransform: 'capitalize',
  backgroundColor: 'transparent',
  outline: 'none', // Focus styles handled in the root selector
  border: 'none', // Border styles handled in the root selector
})

export const option = style({
  fontSize: 20,
  padding: '8px 0px',
  color: vars.palette.text.primary,
  textTransform: 'capitalize',
  backgroundColor: 'transparent',
  outline: 'none', // Focus styles handled in the root selector
  border: 'none', // Border styles handled in the root selector
})
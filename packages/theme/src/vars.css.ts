import { createThemeContract } from '@vanilla-extract/css'

import { createTheme } from './createTheme'

export const vars = createThemeContract(createTheme())


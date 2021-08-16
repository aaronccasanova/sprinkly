import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles';
import { vars } from '@sprinkly/theme'

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const maxWidthSizes = {
  0: '0px',
  none: 'none',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const position = [
  'absolute',
  'relative',
  'static',
  'fixed',
  'sticky',
  'initial',
] as const

const positionValues = ['0', 'auto', '50%', '100%', 'inital'] as const

const overflow = [
  'visible',
  'hidden',
  'clip',
  'scroll',
  'auto',
  'initial',
] as const

const borderStyle = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
] as const

const borderWidth = [`0`, `1px`, `2px`, `3px`, `4px`, `5px`] as const

const colors = {
  primary: vars.palette.primary.main,
  secondary: vars.palette.secondary.main,
} as const

const sizes = {
  ...vars.spacing,
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  full: '100%',
} as const

const textDecorationLine = [
  'none',
  'underline',
  'overline',
  'line-through',
  'blink',
  'initial',
] as const;

const responsiveStyles = createAtomicStyles({
  conditions: {
    xs: {},
    sm: { '@media': 'screen and (min-width: 600)' },
    md: { '@media': 'screen and (min-width: 960)' },
    lg: { '@media': 'screen and (min-width: 1280)' },
    xl: { '@media': 'screen and (min-width: 1920)' },
  },
  defaultCondition: 'xs',
  properties: {
		marginTop: {...vars.spacing, auto: 'auto'},
    marginBottom: {...vars.spacing, auto: 'auto'},
    marginLeft: {...vars.spacing, auto: 'auto'},
    marginRight: {...vars.spacing, auto: 'auto'},
    paddingTop: {...vars.spacing, auto: 'auto'},
    paddingBottom: {...vars.spacing, auto: 'auto'},
    paddingLeft: {...vars.spacing, auto: 'auto'},
    paddingRight: {...vars.spacing, auto: 'auto'},
    textAlign: ['left', 'center', 'right'],
    backgroundColor: colors,
    borderRadius: vars.spacing,
    display: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'flow-root',
      'contents',
    ],
    flexBasis: [0, 1, 2, 3, '25%', '30%', '50%', '70%', '75%'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-evenly',
      'space-between',
    ],
    justifySelf: flexAlignment,
    gap: vars.spacing,
    flexGrow: [0, 1],
    flexShrink: [0],
    placeContent: ['center'],
    // fontWeight: fontWeights,
    // fontSize: fontSizes,
    width: sizes,
    minWidth: {
      0: '0px',
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
    },
    maxWidth: {
      ...sizes,
      ...breakpoints,
      ...maxWidthSizes,
      full: '100%',
      'min-content': 'min-content',
      'max-content': 'max-content',
      prose: '60ch',
    },
    height: {...sizes, screen: '100vh'},
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
    maxHeight: {
      ...sizes,
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
    color: colors,
    textDecorationLine,
    position,
    top: {...positionValues, ...vars.spacing},
    right: {...positionValues, ...vars.spacing},
    bottom: {...positionValues, ...vars.spacing},
    left: {...positionValues, ...vars.spacing},
    overflow,
    borderWidth,
    borderColor: colors,
    borderStyle,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  }
})

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    // etc.
  }
});

export const atoms = createAtomsFn(responsiveStyles, colorStyles);

// It's a good idea to export the Atoms type too
export type Atoms = Parameters<typeof atoms>[0];
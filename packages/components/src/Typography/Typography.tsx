import React from 'react'
import clsx from 'clsx'

import * as styles from './Typography.css'

export interface TypographyProps {
  className?: string
  variant?: keyof typeof styles.variants
  color?: keyof typeof styles.colors
  as?: React.ElementType
  children?: React.ReactNode
}

export function Typography(props: TypographyProps) {
  const {
    className,
    variant = 'body',
    as: Component = 'p',
    color = 'textPrimary',
    ...restProps
  } = props

  return (
    <Component
      className={clsx(
        styles.variants[variant], 
        styles.colors[color],
        className,
      )}
      {...restProps}
    />
  )
}

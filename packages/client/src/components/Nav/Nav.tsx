import React from 'react'

import { Typography } from '@sprinkly/components'

import { ThemePicker } from '../ThemePicker'
import * as styles from './Nav.css'

export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>
        <Typography variant="h4" as="span">Sprinkly </Typography>
        <span role="img" aria-label="Sprinkly">
          ✨
        </span>
      </h2>
      <ThemePicker />
    </div>
  )
}

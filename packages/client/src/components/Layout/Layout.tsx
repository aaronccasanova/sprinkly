import React from 'react'

import { useTheme, themeClasses } from '../ThemePicker'
import { Nav } from '../Nav'
import * as styles from './Layout.css'

export interface LayoutProps {
	children: React.ReactNode
}

export function Layout(props: LayoutProps) {
	const context = useTheme()

	return (
		<div className={`${context.themeClass} ${styles.root}`}>
			<Nav />
			{props.children}
		</div>
	)
}

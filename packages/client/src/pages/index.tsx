import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@sprinkly/components'

import {
	Layout,
} from '../components'
import * as styles from './index.css'

function IndexPage() {
  return (
    <Layout>
			<div>
				<Link to="/about">Route to About!</Link>
			</div>
			<div className={styles.container}>
				<div className={styles.box}>
					<Typography
						className={styles.heading}
						variant="h1"
						as="h2"
						color="textPrimary"
					>
							SPRINKLY
					</Typography>
					<Typography
						variant="h4"
						color="textPrimary"
					>
						¯\_(ツ)_/¯
					</Typography>
				</div>
			</div>
    </Layout>
  )
}

export default IndexPage

import React from 'react'
import { Link } from 'react-router-dom'

import {
	Layout,
} from '../components'

function AboutPage() {
  return (
    <Layout>
      <Link to="/">Sprinkly Home</Link>
      <h1>About Page</h1>
    </Layout>
  )
}

export default AboutPage

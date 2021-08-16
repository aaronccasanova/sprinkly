import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '@sprinkly/components/styles'

import { ThemePickerProvider } from './components'

const Index = React.lazy(() => import('./pages/index'))
const About = React.lazy(() => import('./pages/about'))

ReactDOM.render(
	<ThemePickerProvider>
		<Router>
			<React.Suspense fallback={<div />}>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route path="/about" component={About} />
				</Switch>
			</React.Suspense>
		</Router>
	</ThemePickerProvider>,
  document.getElementById('root'),
)

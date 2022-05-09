import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchPage from '../SearchPage' // eslint-disable-line import/no-named-as-default
import PageNotFound from '../PageNotFound' // eslint-disable-line import/no-named-as-default

import styles from './index.scss'

export const App = () => (
	<div className={styles.app}>
		<Switch>
			<Route exact path='/' component={SearchPage} />
			<Route component={PageNotFound} />
		</Switch>
	</div>
)

export default App

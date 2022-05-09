import React from 'react'

import styles from './index.scss'
import join from 'classnames'

export const SearchPage = () => (
	<div className={styles.searchPage}>
		<h1>Find address</h1>
		<form id='searchComponent' className={styles.searchComponent}>
			<input
				type='search'
				placeholder='Type postal code'
				pattern='[a-zA-Z0-9]{6}'
				maxLength='6'
				className={join('form-control', styles.searchInput)}
			></input>
			<button type='submit' form='searchComponent' className={'btn btn-primary'}>
				Zoeken
			</button>
		</form>
		<p>No address to show.</p>
	</div>
)

export default SearchPage

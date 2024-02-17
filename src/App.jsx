import { useEffect, useState } from 'react'

import { Body, LeftPanel } from './layouts'
import {
	Header,
	JournalAddButton,
	JournalForm,
	JournalList
} from './components'

import styles from './App.module.scss'

export const App = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'))
		if (data) {
			setItems(
				data.map(item => ({
					...item,
					date: new Date(item.date)
				}))
			)
		}
	}, [])

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items))
		}
	}, [items])

	const addItem = item => {
		setItems(prev => [
			...prev,
			{
				id: prev.length > 0 ? Math.max(...prev.map(item => item.id)) + 1 : 1,
				title: item.title,
				date: new Date(item.date),
				text: item.text
			}
		])
	}

	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	)
}

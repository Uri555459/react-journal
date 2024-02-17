import { useState } from 'react'

import { Body, LeftPanel } from './layouts'
import {
	Header,
	JournalAddButton,
	JournalForm,
	JournalList
} from './components'

import styles from './App.module.scss'

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'My title',
	// 	date: new Date(),
	// 	tag: 'My text',
	// 	text: 'Hi'
	// }
]

export const App = () => {
	const [items, setItems] = useState(INITIAL_DATA)

	const addItem = item => {
		setItems(prev => [
			...prev,
			{
				id: Math.max(...prev.map(item => item.id)) + 1,
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

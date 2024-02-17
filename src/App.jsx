import { useState } from 'react'

import { Body, LeftPanel } from './layouts'

import {
	CardButton,
	Header,
	JournalAddButton,
	JournalForm,
	JournalItem,
	JournalList
} from './components'

import styles from './App.module.scss'

const INITIAL_DATA = [
	{
		title: 'My title',
		date: new Date(),
		tag: 'My text',
		text: 'Hi'
	}
]

export const App = () => {
	const [items, setItems] = useState(INITIAL_DATA)

	const addItem = item => {
		setItems(prev => [
			...prev,
			{
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
				<JournalList>
					{items.map(({ title, text, date }) => (
						<CardButton key={title}>
							<JournalItem title={title} text={text} date={date} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	)
}

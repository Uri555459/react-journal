import { useState } from 'react'

import {
	Header,
	JournalAddButton,
	JournalForm,
	JournalList
} from '@/components'

import { Body, LeftPanel } from '@/layouts'

import { useLocalStorage } from '@/hooks/useLocalStorage.hook'

import { UserContextProvider } from '@/context/user.context'

import styles from './App.module.scss'

const mapItems = items => {
	if (!items) {
		return []
	}
	return items.map(item => ({ ...item, date: new Date(item.date) }))
}

export const App = () => {
	const [items, setItems] = useLocalStorage('data')
	const [selectedItem, setSelectedItem] = useState(null)

	const addItem = item => {
		if (!item.id) {
			setItems([
				...mapItems(items),
				{
					...item,
					date: new Date(item.date),
					id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
				}
			])
		} else {
			setItems([
				...mapItems(items).map(i => {
					if (i.id === item.id) {
						return { ...item }
					}

					return i
				})
			])
		}
	}

	const deleteItem = id => {
		setItems([...items.filter(i => i.id !== id)])
	}

	return (
		<UserContextProvider>
			<div className={styles.app}>
				<LeftPanel>
					<Header />
					<JournalAddButton clearForm={() => setSelectedItem(null)} />
					<JournalList
						items={mapItems(items)}
						setItem={setSelectedItem}
					/>
				</LeftPanel>
				<Body>
					<JournalForm
						onSubmit={addItem}
						data={selectedItem}
						onDelete={deleteItem}
					/>
				</Body>
			</div>
		</UserContextProvider>
	)
}

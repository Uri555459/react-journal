import { Header, JournalAddButton, JournalForm, JournalList } from '../'
import { UserContextProvider } from '../../context/user.context'
import { useLocalStorage } from '../../hooks/useLocalStorage.hook'
import { Body, LeftPanel } from '../../layouts'

import styles from './App.module.scss'

const mapItems = items => {
	if (!items) {
		return []
	}
	return items.map(item => ({ ...item, date: new Date(item.date) }))
}

export const App = () => {
	const [items, setItems] = useLocalStorage('data')

	const addItem = item => {
		setItems([
			...mapItems(items),
			{
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
			}
		])
	}

	return (
		<UserContextProvider>
			<div className={styles.app}>
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={mapItems(items)} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} />
				</Body>
			</div>
		</UserContextProvider>
	)
}

import { CardButton, JournalItem } from './components'

import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.app}>
			<CardButton>
				<JournalItem title='Какой-то заголовок' text='Какой-то текст' />
			</CardButton>
		</div>
	)
}

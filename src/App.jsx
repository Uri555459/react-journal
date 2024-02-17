import { Body, LeftPanel } from './layouts'

import {
	CardButton,
	Header,
	JournalAddButton,
	JournalItem,
	JournalList
} from './components'

import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem title='Title' text='Description' />
					</CardButton>
					<CardButton>
						<JournalItem title='Title' text='Description' />
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>Body</Body>
		</div>
	)
}

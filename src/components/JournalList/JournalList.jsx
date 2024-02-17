import { CardButton } from '../'
import { JournalItem } from '../'

import styles from './JournalList.module.scss'

export const JournalList = ({ items }) => {
	if (items.length === 0) {
		return <p>Записей нет, добавьте запись</p>
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	return (
		<div className={styles['journal-list']}>
			{items.sort(sortItems).map(({ title, text, date, id }) => (
				<CardButton key={id}>
					<JournalItem title={title} text={text} date={date} />
				</CardButton>
			))}
		</div>
	)
}

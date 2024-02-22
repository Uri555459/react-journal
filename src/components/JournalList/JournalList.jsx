import { useContext } from 'react'

import { CardButton, JournalItem } from '@/components'

import { UserContext } from '@/context/user.context'

import styles from './JournalList.module.scss'

export const JournalList = ({ items }) => {
	const { userId } = useContext(UserContext)

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
			{items
				.filter(el => el.userId === userId)
				.sort(sortItems)
				.map(({ title, text, date, id }) => (
					<CardButton key={id}>
						<JournalItem
							title={title}
							text={text}
							date={date}
						/>
					</CardButton>
				))}
		</div>
	)
}

import { useContext, useMemo } from 'react'

import { CardButton, JournalItem } from '@/components'

import { UserContext } from '@/context/user.context'

import styles from './JournalList.module.scss'

export const JournalList = ({ items, setItem }) => {
	const { userId } = useContext(UserContext)

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	const filteredItems = useMemo(
		() => items.filter(el => el.userId === userId).sort(sortItems),
		[items, userId]
	)

	if (items.length === 0) {
		return <p>Записей нет, добавьте запись</p>
	}

	return (
		<div className={styles['journal-list']}>
			{filteredItems.map(el => (
				<CardButton
					key={el.id}
					onClick={() => setItem(el)}
				>
					<JournalItem
						title={el.title}
						text={el.text}
						date={el.date}
					/>
				</CardButton>
			))}
		</div>
	)
}

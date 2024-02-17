import styles from './JournalList.module.scss'

export const JournalList = ({ children }) => {
	return <div className={styles['journal-list']}>{children}</div>
}

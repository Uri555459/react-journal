import styles from './JournalItem.module.scss';

export const JournalItem = ({ title = '', date = new Date(), text = '' }) => {
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<div className={styles['journal-item']}>
			<h2 className={styles['journal-item__header']}>{title}</h2>
			<h2 className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>{formattedDate}</div>
				<div className={styles['journal-item__text']}>{text}</div>
			</h2>
		</div>
	);
};

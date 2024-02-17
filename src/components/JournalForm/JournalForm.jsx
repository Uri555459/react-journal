import { Button } from '../'
import styles from './JournalForm.module.scss'

export const JournalForm = ({ onSubmit }) => {
	const addJournalItem = event => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const formProps = Object.fromEntries(formData)
		onSubmit(formProps)
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input type='text' name='tag' />
			<textarea name='' cols='30' rows='10'></textarea>
			<Button text='Сохранить' />
		</form>
	)
}

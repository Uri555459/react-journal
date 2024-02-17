import { useEffect, useState } from 'react'
import cn from 'clsx'

import { Button } from '../'

import styles from './JournalForm.module.scss'

const INITIAL_STATE = {
	title: true,
	text: true,
	date: true
}

const DELAY = 2000

export const JournalForm = ({ onSubmit }) => {
	const [formValidState, setFormValidState] = useState(INITIAL_STATE)

	useEffect(() => {
		let timerId

		if (
			!formValidState.date ||
			!setFormValidState.text ||
			!setFormValidState.title
		) {
			timerId = setTimeout(() => {
				setFormValidState(INITIAL_STATE)
			}, DELAY)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [formValidState])

	const addJournalItem = event => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const formProps = Object.fromEntries(formData)

		let isFormValid = true
		if (!formProps.title?.trim()) {
			setFormValidState(state => ({ ...state, title: false }))
			isFormValid = false
		} else {
			setFormValidState(state => ({ ...state, title: true }))
		}

		if (!formProps.text?.trim()) {
			setFormValidState(state => ({ ...state, text: false }))
			isFormValid = false
		} else {
			setFormValidState(state => ({ ...state, text: true }))
		}

		if (!formProps.date) {
			setFormValidState(state => ({ ...state, date: false }))
			isFormValid = false
		} else {
			setFormValidState(state => ({ ...state, date: true }))
		}

		if (!isFormValid) {
			return
		}

		onSubmit(formProps)
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<input
					type='text'
					name='title'
					className={cn(styles['input'], {
						[styles.invalid]: !formValidState.title
					})}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря' />
					<span>Дата</span>
				</label>
				<input
					id='date'
					type='date'
					name='date'
					className={cn(styles.input, {
						[styles.invalid]: !formValidState.date
					})}
				/>
			</div>

			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input id='tag' type='text' name='tag' className={cn(styles.input)} />
			</div>
			<textarea
				name='text'
				cols='30'
				rows='10'
				className={cn(styles.input, {
					[styles.invalid]: !formValidState.text
				})}
			></textarea>
			<Button text='Сохранить' />
		</form>
	)
}

import { useEffect, useReducer, useRef } from 'react'
import cn from 'clsx'

import { Button } from '../'

import { INITIAL_STATE, formReducer } from './JournalForm.state'

import styles from './JournalForm.module.scss'

const DELAY = 2000

export const JournalForm = ({ onSubmit }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const titleRef = useRef()
	const dateRef = useRef()
	const tagRef = useRef()
	const textRef = useRef()
	const { isValid, isFormReadyToSubmit, values } = formState

	const focusError = isValid => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus()
				break
			case !isValid.date:
				dateRef.current.focus()
				break
			case !isValid.tag:
				tagRef.current.focus()
				break
			case !isValid.text:
				textRef.current.focus()
				break
		}
	}

	useEffect(() => {
		let timerId

		if (!isValid.date || !isValid.text || !isValid.title || !isValid.tag) {
			focusError(isValid)

			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
			}, DELAY)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values)
			dispatchForm({ type: 'CLEAR' })
		}
	}, [isFormReadyToSubmit, onSubmit, values])

	const addJournalItem = event => {
		event.preventDefault()
		dispatchForm({ type: 'SUBMIT' })
	}

	const onChange = event => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [event.target.name]: event.target.value }
		})
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<input
					type='text'
					name='title'
					ref={titleRef}
					value={values.title}
					className={cn(styles['input'], {
						[styles.invalid]: !isValid.title
					})}
					onChange={onChange}
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
					ref={dateRef}
					value={values.date}
					className={cn(styles.input, {
						[styles.invalid]: !isValid.date
					})}
					onChange={onChange}
				/>
			</div>

			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input
					id='tag'
					type='text'
					name='tag'
					ref={tagRef}
					value={values.tag}
					className={cn(styles.input, {
						[styles.invalid]: !isValid.tag
					})}
					onChange={onChange}
				/>
			</div>
			<textarea
				name='text'
				cols='30'
				rows='10'
				ref={textRef}
				value={values.text}
				className={cn(styles.input, {
					[styles.invalid]: !isValid.text
				})}
				onChange={onChange}
			></textarea>
			<Button text='Сохранить' />
		</form>
	)
}

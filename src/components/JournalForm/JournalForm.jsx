import cn from 'clsx'
import { useContext, useEffect, useReducer, useRef } from 'react'

import { Button, Input } from '@/components'

import { UserContext } from '@/context/user.context'

import styles from './JournalForm.module.scss'
import { INITIAL_STATE, formReducer } from './JournalForm.state'

const DELAY = 2000

export const JournalForm = ({ onSubmit, data, onDelete }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { userId } = useContext(UserContext)
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
		if (!data) {
			dispatchForm({ type: 'CLEAR' })
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId }
			})
		}
		dispatchForm({
			type: 'SET_VALUE',
			payload: { ...data }
		})
	}, [data, userId])

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
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId }
			})
		}
	}, [isFormReadyToSubmit, onSubmit, values, userId])

	useEffect(() => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { userId }
		})
	}, [userId])

	const addJournalItem = event => {
		event.preventDefault()
		dispatchForm({ type: 'SUBMIT' })
	}

	const deleteJournalItem = () => {
		onDelete(data.id)
		dispatchForm({ type: 'CLEAR' })
		dispatchForm({ type: 'SET_VALUE', payload: { userId } })
	}

	const onChange = event => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [event.target.name]: event.target.value }
		})
	}

	return (
		<form
			className={styles['journal-form']}
			onSubmit={addJournalItem}
		>
			<div className={styles['form-row']}>
				<Input
					type='text'
					name='title'
					ref={titleRef}
					value={values.title}
					isValid={!isValid.title}
					onChange={onChange}
					appearance='title'
				/>
				{data?.id && (
					<button
						className={styles['delete']}
						type='button'
						onClick={deleteJournalItem}
					>
						<img
							src='/archive.svg'
							alt='Кнопка удалить'
						/>
					</button>
				)}
			</div>
			<div className={styles['form-row']}>
				<label
					htmlFor='date'
					className={styles['form-label']}
				>
					<img
						src='/calendar.svg'
						alt='Иконка календаря'
					/>
					<span>Дата</span>
				</label>
				<Input
					id='date'
					type='date'
					name='date'
					ref={dateRef}
					value={
						values.date ? new Date(values.date).toISOString().slice(0, 10) : ''
					}
					isValid={!isValid.date}
					onChange={onChange}
				/>
			</div>

			<div className={styles['form-row']}>
				<label
					htmlFor='tag'
					className={styles['form-label']}
				>
					<img
						src='/folder.svg'
						alt='Иконка папки'
					/>
					<span>Метки</span>
				</label>
				<Input
					id='tag'
					type='text'
					name='tag'
					ref={tagRef}
					value={values.tag}
					isValid={!isValid.tag}
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
			<Button>Сохранить</Button>
		</form>
	)
}

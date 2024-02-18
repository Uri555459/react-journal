import { forwardRef } from 'react'
import cn from 'clsx'

import styles from './Input.module.scss'

export const Input = forwardRef(
	({ className, isValid, appearance = 'text', ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(className, {
					[styles.invalid]: isValid,
					[styles['input-title']]: appearance === 'title',
					[styles['input']]: appearance === 'text'
				})}
				{...props}
			/>
		)
	}
)

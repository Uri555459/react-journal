import cn from 'clsx'
import { memo } from 'react'

import styles from './Button.module.scss'

export const Button = memo(({ children, onClick = () => {} }) => {
	return (
		<button
			className={cn(styles.button, styles.accent)}
			onClick={onClick}
		>
			{children}
		</button>
	)
})

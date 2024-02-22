import cn from 'clsx'

import styles from './Button.module.scss'

export const Button = ({ children, onClick = () => {} }) => {
	return (
		<button
			className={cn(styles.button, styles.accent)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

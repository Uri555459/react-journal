import cn from 'clsx'

import styles from './Button.module.scss'

export const Button = ({ text = '', onClick = () => {} }) => {
	return (
		<button
			className={cn(styles.button, styles.accent)}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

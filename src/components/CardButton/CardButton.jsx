import cn from 'clsx'

import styles from './CardButton.module.scss'

export const CardButton = ({ children, className, ...props }) => {
	return (
		<button
			className={cn(styles['card-button'], className)}
			{...props}
		>
			{children}
		</button>
	)
}

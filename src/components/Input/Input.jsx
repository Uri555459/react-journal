import cn from 'clsx'

import styles from './Input.module.scss'

export const Input = ({ className }) => {
	return <input type='text' className={cn(styles.input, className)} />
}

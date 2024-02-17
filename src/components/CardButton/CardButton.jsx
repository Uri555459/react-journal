import styles from './CardButton.module.scss'

export const CardButton = ({ children }) => {
	return <button className={styles['card-button']}>{children}</button>
}

import styles from './Button.module.scss'

export const Button = ({ children }) => {
	const clicked = () => {}

	return (
		<button onClick={clicked} className={styles.button}>
			{children}
		</button>
	)
}

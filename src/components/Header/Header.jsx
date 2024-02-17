import logoImage from '/logo.svg'

import styles from './Header.module.scss'
import { Logo } from '../Logo/Logo'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo image={logoImage} />
		</header>
	)
}

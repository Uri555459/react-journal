import logoImage from '/logo.svg'

import { Logo, SelectUser } from '../'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo image={logoImage} />
			<SelectUser />
		</header>
	)
}

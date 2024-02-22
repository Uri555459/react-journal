import { useState } from 'react'

import { Button, Logo, SelectUser } from '../'

import styles from './Header.module.scss'

const logos = ['/logo.svg', '/vite.svg']

export const Header = () => {
	const [logoIndex, setLogoIndex] = useState(0)

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state))
	}

	return (
		<header className={styles.header}>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
			<Button onClick={toggleLogo}>Сменить логотип</Button>
		</header>
	)
}

import { useCallback, useState } from 'react'

import { Button, Logo, SelectUser } from '@/components'

const logos = ['/logo.svg', '/vite.svg']

export const Header = () => {
	const [logoIndex, setLogoIndex] = useState(0)

	const toggleLogo = useCallback(() => {
		setLogoIndex(state => Number(!state))
	}, [])

	return (
		<header>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
			<Button onClick={toggleLogo}>Сменить логотип</Button>
		</header>
	)
}

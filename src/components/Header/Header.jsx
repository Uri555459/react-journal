import logoImage from '/logo.svg'

import { Logo, SelectUser } from '@/components'

export const Header = () => {
	return (
		<header>
			<Logo image={logoImage} />
			<SelectUser />
		</header>
	)
}

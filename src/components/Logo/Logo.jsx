import { memo } from 'react'

import styles from './Logo.module.scss'

export const Logo = memo(({ image }) => {
	return (
		<img
			className={styles.logo}
			src={image}
			alt='Логотип журнала'
		/>
	)
})

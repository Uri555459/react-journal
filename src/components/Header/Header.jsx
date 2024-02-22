import logoImage from '/logo.svg';

import { Logo } from '../';

import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo image={logoImage} />
			<select
				name='user'
				id='user'
			>
				<option value='1'>Admin</option>
				<option value='2'>User</option>
			</select>
		</header>
	);
};

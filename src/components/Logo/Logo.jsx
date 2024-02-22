import styles from './Logo.module.scss';

export const Logo = ({ image }) => {
	return (
		<img
			className={styles.logo}
			src={image}
			alt='Логотип журнала'
		/>
	);
};

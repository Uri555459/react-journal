import styles from './Body.module.scss';

export const Body = ({ children }) => {
	return <div className={styles.body}>{children}</div>;
};

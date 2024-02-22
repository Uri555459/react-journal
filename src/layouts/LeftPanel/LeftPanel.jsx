import styles from './LeftPanel.module.scss';

export const LeftPanel = ({ children }) => {
	return <div className={styles['left-panel']}>{children}</div>;
};

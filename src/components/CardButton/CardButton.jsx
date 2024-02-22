import cn from 'clsx';

import styles from './CardButton.module.scss';

export const CardButton = ({ children, className }) => {
	return (
		<button className={cn(styles['card-button'], className)}>{children}</button>
	);
};

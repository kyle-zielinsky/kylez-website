import styles from '@styles/Layout.module.css';
import { BaseProps } from '@types';
import clsx from 'clsx';

const Layout = ({ children, className }: BaseProps) => (
  <div className={clsx(styles.container, className)}>{children}</div>
);

Layout.defaultProps = {
  children: null,
  className: null,
};

export default Layout;

import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export function MenuLink({ children, to }) {
  return (
    //
    <NavLink to={to} className={({ isActive }) => ` ${styles.link} ${isActive ? styles.linkDestacado : ''}`}>
      {children}
    </NavLink>
  );
}

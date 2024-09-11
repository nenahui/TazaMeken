import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to={''} className={styles.navItem}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className={styles.navItem}>
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink to={''} className={styles.navItem}>
            Мероприятия
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className={styles.navItem}>
            Карта загрязнений
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

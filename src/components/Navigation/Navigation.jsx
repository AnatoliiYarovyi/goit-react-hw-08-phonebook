import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={style.link}
      // activeStyle={style.active}
    >
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={style.link}
      // activeStyle={style.active}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;

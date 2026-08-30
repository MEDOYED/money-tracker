import { NavLink, Link } from "react-router-dom";

import s from "./top-bar.module.scss";

export const TopBar = () => {
  return (
    <header className={s.topBar}>
      <button className={s.menuButton} type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={s.navigation}>
        <NavLink to="/" className={({ isActive }) => (isActive ? s.active : s.link)}>
          Расходы
        </NavLink>

        <NavLink to="/income" className={({ isActive }) => (isActive ? s.active : s.link)}>
          Доходы
        </NavLink>
      </nav>

      <select className={s.select} name="incomesList" id="incomesList">
        <option value="">Выберите источник</option>
        <option value="salary">Карта</option>
        <option value="freelance">Кредитка</option>
      </select>

      <Link to="/history" className={s.historyLink}></Link>
    </header>
  );
};

import { NavLink, Outlet } from "react-router-dom";
import css from '../App.module.css'

export const Layout = () =>  (<div className='content-wrapper'>
      <header>
        <div className={css.navList}>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `${css.navLink} ${isActive ? css.active : ''}`} to="/movies">Movies</NavLink>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>)

import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/music"
          >
            Music
          </NavLink>
        </li>
      </ul>
      <ul className={s.navList}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

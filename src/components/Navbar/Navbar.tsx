import React from "react"
import s from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.item}>
          <a className={s.link} href="/profile">
            Profile
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/dialogs">
            Messages
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/news">
            News
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/music">
            Music
          </a>
        </li>
      </ul>
      <ul className={s.navList}>
        <li className={s.item}>
          <a className={s.link} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  )
}

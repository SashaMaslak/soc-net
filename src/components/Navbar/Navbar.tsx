import React from "react"
import { NavLink } from "react-router-dom"
import state from "../redux/state"
import s from "./Navbar.module.css"
import { RxAvatar } from "react-icons/rx"

export const Navbar = () => {
  const { friends } = state

  function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

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
        <li className={s.itemFriends}>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/settings"
          >
            Friends:
          </NavLink>
          <ul className={s.friendList}>
            {friends.map(f => (
              <li key={f.id} className={s.friendField}>
                <NavLink className={s.friendFieldLink} to="/settings">
                  <RxAvatar size={36} color={getRandomColor()} />
                  <p className={s.friendFieldName}>{f.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

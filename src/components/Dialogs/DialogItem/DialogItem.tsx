import React from "react"
import s from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"

type DialogPropsType = {
  name: string
  id: string
}

export const DialogItem = (props: DialogPropsType) => {
  return (
    <li className={s.item + " " + s.active}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to={`/dialogs/${props.id}`}
      >
        {props.name}
      </NavLink>
    </li>
  )
}

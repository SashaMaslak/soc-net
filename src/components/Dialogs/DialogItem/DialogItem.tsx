import React from "react"
import s from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"
import { RxAvatar } from "react-icons/rx"

type DialogPropsType = {
  name: string
  id: string
}

export const DialogItem = (props: DialogPropsType) => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <li className={s.item}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to={`/dialogs/${props.id}`}
      >
        <RxAvatar size={36} color={getRandomColor()} />{" "}
        <p className={s.friendFieldName}>{props.name}</p>
      </NavLink>
    </li>
  )
}

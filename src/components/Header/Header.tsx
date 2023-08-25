import React from "react"
import s from "./Header.module.css"
import logo from "../../img/logo.png"

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="#">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
    </header>
  )
}

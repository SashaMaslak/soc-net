import React from "react"
import s from "./Header.module.css"
import logo from "../../img/logo.png"
import { GoSignIn } from "react-icons/go"
import { BsPersonPlus } from "react-icons/bs"

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="/home">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
      <a href="/home" className={s.siteName}>
        <h1>SOCIAL NETWORK - MOWGLI</h1>
      </a>
      <div className={s.icons}>
        <a href="/home" className={s.iconSignIn}>
          <BsPersonPlus color="#fff" size="28" />
        </a>
        <a href="/home" className={s.iconSignIn}>
          <GoSignIn color="#fff" size="28" />
        </a>
      </div>
    </header>
  )
}

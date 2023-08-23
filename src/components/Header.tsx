import React from "react"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <header className={s.header} style={{ backgroundColor: "LightGreen" }}>
      <img
        className={s.img}
        src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.png"
        alt="logo"
        width="600px"
      />
    </header>
  )
}

import React from "react"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"
import s from "./Layout.module.css"

export function Layout() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

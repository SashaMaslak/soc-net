import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile"
import { Dialogs } from "./components/Dialogs/Dialogs"
import { Layout } from "./components/Layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<Content />}>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs" element={<Dialogs />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

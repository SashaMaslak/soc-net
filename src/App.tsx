import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Dialogs } from "./components/Dialogs/Dialogs"
import { Layout } from "./components/Layout/Layout"
import { News } from "./components/News/News"
import { Music } from "./components/Music/Music"
import { Settings } from "./components/Settings/Settings"
import { HomePage } from "./pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

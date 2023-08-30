import React from "react"
import { Outlet } from "react-router-dom"

export const HomePage = () => {
  return (
    <div style={{ gridArea: "c", borderRadius: 8 }}>
      <Outlet />
    </div>
  )
}

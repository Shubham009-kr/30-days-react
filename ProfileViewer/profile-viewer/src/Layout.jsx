import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

const Layout = () => {
  return (
    <UserContextProvider>
        <Outlet />
    </UserContextProvider>
  )
}

export default Layout
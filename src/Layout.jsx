import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Content from './component/Content'

function Layout() {
  return (
    <>
            <Header/>
            <Outlet/>
            <Footer/>
    </>
  )
}

export default Layout
// src/components/Layout.jsx
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout

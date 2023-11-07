import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
        <header className='bg-base-300'>
          <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </div>
  )
}

export default RootLayout
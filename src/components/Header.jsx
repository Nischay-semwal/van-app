import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <Link to="/" className="text-2xl font-bold ml-4 hover:text-yellow-400 transition-colors duration-300">
          #VANLIFE
        </Link>
        <nav className="flex gap-6 mr-4">
          <NavLink to='host' className={({isActive})=>isActive ? 'text-lg font-bold underline text-red-600':'text-lg hover:text-yellow-400 transition-colors duration-300 '}>
            Host
          </NavLink>
          <NavLink to="about" className={({isActive})=>isActive ? 'text-lg font-bold underline text-red-600':'text-lg hover:text-yellow-400 transition-colors duration-300 '}>
            About
          </NavLink>
          <NavLink to="vans" className={({isActive})=>isActive ? 'text-lg font-bold underline text-red-600':'text-lg hover:text-yellow-400 transition-colors duration-300 '}>
            Vans
          </NavLink>
          <NavLink to="login" className={({isActive})=>isActive ? 'text-lg font-bold underline text-red-600':'text-lg hover:text-yellow-400 transition-colors duration-300 '}>
           Login  
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header

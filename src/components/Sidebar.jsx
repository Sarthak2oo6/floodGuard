import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 overflow-y-auto`}>
      <div className="p-6">
        <h2 className={`font-bold text-lg ${!isOpen && 'text-center'}`}>
          {isOpen ? 'FloodGuard' : '☰'}
        </h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition ${
              isActive(item.path) ? 'bg-blue-600 border-l-4 border-blue-400' : ''
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
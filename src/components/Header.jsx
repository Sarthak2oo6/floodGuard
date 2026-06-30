import React from 'react'

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">🌊 FloodGuard</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Status: <span className="text-green-600 font-semibold">● Online</span></span>
      </div>
    </header>
  )
}

export default Header
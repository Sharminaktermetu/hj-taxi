import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white py-4 px-6'>
      <header className=" flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-yellow-400 ">HJ <span className="text-white">taxi</span></div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
          <a href="#" className="hover:text-yellow-400">Booking</a>
          <a href="#" className="hover:text-yellow-400">CPAM Transport</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </nav>
        <div className="text-sm">FR ▼</div>
      </header>
    </div>
  )
}

export default Header

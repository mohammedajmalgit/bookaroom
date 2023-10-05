import React from 'react'
import dp from '../assets/user.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='text-left px-[5%] py-[20px] shadow-xl font-semibold text-[20px] flex justify-between select-none'>
      <span
        onClick={() => { navigate('/') }}
        className='hover:cursor-pointer select-none dancing text-[24px]'
      > Book a Room</span>
      <div className='flex items-center hover:cursor-pointer'
        onClick={() => { navigate('/dashboard') }}
      >
        <span >Dashboard </span>
        <img src={dp} className="h-[40px] w-[40px]  ml-[10px]" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
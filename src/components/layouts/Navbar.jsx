import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
      <nav className='w-full py-4 sticky top-0 bg-white z-50 shadow-2xs  '>
        <div className="container ">
          <div className="flex justify-between">
          <div className="logo">
            <img className='w-[100px] h-[48px]' src="logo-default-slim.png" alt="LOGO" />
          </div>
          <div className="nav flex justify-between items-center">
            <div className="navLinks px-4">
              <ul className='flex gap-8 text-black font-semibold text-sm leading-24p tracking-sm uppercase'>
                <li><a className='navLink' href="/">HOME</a></li>
                <li><a className='navLink' href="/elements">ELEMENTS</a></li>
                <li><a className='navLink' href="/features">FEATURES</a></li>
                <li><a className='navLink' href="/pages">PAGES</a></li>
                <li><a className='navLink' href="/portfolio">PORTFOLIO</a></li>
                <li><a className='navLink' href="/blog">BLOG</a></li>
                <li><a className='navLink' href="/shop">SHOP</a></li>                
              </ul>
            </div>
            <div className="social ps-4">
              <ul className='flex gap-1.5'>
                <li className='socialIcon hover:bg-[#3b5a9a]'><FaFacebookF /></li>
                <li className='socialIcon hover:bg-[#1aa9e1]'><FaXTwitter /></li>
                <li className='socialIcon hover:bg-[#0073b2]'><FaLinkedinIn /></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar

import React from 'react'
import Logo from '../assets/images/logo.png'
import Gift from '../assets/images/colored-gift.gif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

    useGSAP(() => {
        gsap.from('header', {
            y: '-50%',
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        })
    })


  return (
    <>
        <header className='sticky top-0 z-20 flex items-stretch justify-between gap-5 max-w-7xl px-5 py-4 m-auto p-6'>
          <div className='flex items-center justify-between bg-white rounded-xl w-full px-4 py-3'>
            <img src={Logo} alt="Chocolyf Logo" className='max-w-36' />
            <nav>
                <ul className='flex items-center gap-9 font-medium tracking-tight'>
                    <li><a href="">Flavours</a></li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">How it's Made</a></li>
                    <li><a href="" className=' flex items-center gap-2 justify-between'><img src={Gift} alt="Gift Icon" className='max-w-11 pb-2' />Gifting</a></li>
                </ul>
            </nav>
          </div>
          <a href="" className='flex items-center justify-center bg-white rounded-xl text-nowrap px-4 py-3 font-medium gap-3'>Explore Flavours
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#FF6B57"/>
            <path d="M23 16H9M23 16L17 22M23 16L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
        </header>
    </>
  )
}

export default Header
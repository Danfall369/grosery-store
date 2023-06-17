import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image'
import Logo from '../public/logo.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Image src={Logo} alt="Logo" width={30} ></Image>
        <Link href="/">Multitiendas E.A.F</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar
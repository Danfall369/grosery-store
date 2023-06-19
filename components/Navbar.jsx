import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image'
import Logo from '../public/logo.png';
import { Cart } from './';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const  { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className='logo'>
        <Image src={Logo} alt="Logo" width={30} ></Image>
        <Link href="/">Multitiendas E.A.F</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
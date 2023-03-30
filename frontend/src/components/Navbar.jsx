import React from 'react'
import { FaUserAlt, FaOpencart, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
  <nav>
    <span className="yve">ივერსი</span>
    <div className='center'>
        <li>
          <a href="#">მაღაზია</a>
        </li>
        <li>
          <a href="#">დახმარება</a>
        </li>
        <li>
          <a href="#">ჩვენს შესახებ</a>
        </li>
    </div>
    <li className='icons'>
      <FaUserAlt className='icon' />
      <FaShoppingCart className='icon' />
      <FaSearch className='icon' />
    </li>
  </nav>
  )
}

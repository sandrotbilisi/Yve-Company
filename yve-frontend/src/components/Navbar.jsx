import React from 'react'
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
  <nav>
    <span className="yve">ივერსი</span>
    <div className='center'>
        <li>
          {/* <Link to={'explore'}>მაღაზია</Link> */}
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

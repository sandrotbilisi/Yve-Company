import React from 'react'

export default function Navbar() {
  return (
  <>
   
     
   <div className="smt">
  <video controls="" autoPlay="y" name="media">
    <source src="./vid 1.webm  " />
  </video>
  <nav>
    <span className="yve">ივერსი</span>
    <ul>
      <li>
        <a href="#">მაღაზია</a>
      </li>
      <li>
        <a href="#">დახმარება</a>
      </li>
      <li>
        <a href="#">about us</a>
      </li>
      <li>
        <a href="" className="logos">
          <i className="fa-solid fa-user" />
        </a>
      </li>
      <li>
        <a href="" className="logos">
          <i className="fa-solid fa-magnifying-glass" />
        </a>
      </li>
    </ul>
  </nav>
  <div className="content">
    <h1>თქვენი მეგზური ციფრულ სამყაროში</h1>
    <a href="#">კატალოგი</a>
  </div>
</div>

    </>
  )
}

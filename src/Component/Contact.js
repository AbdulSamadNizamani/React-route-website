import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Contact() {
  return (
    <>
    <nav>
      <ul className="nav-list">
      <li><i class="fa-solid fa-house-chimney"></i><NavLink className={'khan'} to={"/"}>Home</NavLink></li>
        <li><i class="fa-solid fa-location-dot"></i><NavLink className={'khan'} to={"/About"}>Popular Places</NavLink></li>
        <li><i class="fa-solid fa-phone-volume"></i><NavLink className={'khan'} to={"/Contact"}>Contact</NavLink></li>
        <div className="bdn-list">
          <input type="text" placeholder='search' />
          <button className='bdn'>Search</button>
        </div>
      </ul>
    </nav>
    <div className="item">
      <h4>Write Your Name</h4>
      <input className='try' type="text" placeholder='write Your Name' />
      <br />
      <h4>Write Your Contact Number</h4>
      <input className='try' type="text" placeholder='write Your Name' />
      <br />
      <h4>Write Your Email Address</h4>
      <input  className='try'type="email" placeholder='write Your Email' />
      <br />
      <h4>Write Your Password</h4>
      <input className='try' type="Password" placeholder='write Your Password' />
      <div className="container"><h2>OR Contact Us At</h2>

        <button className='contact-btn google'><i class="fa-brands fa-google-plus-g"></i>Google</button>
        <br />
      Or
        <br />
        <button className='contact-btn facebook'><i class="fa-brands fa-facebook-f"></i>Facebook</button>
        <br />
        <button className='contact-btn twitter'><i class="fa-brands fa-x-twitter"></i>Twitter</button>
      </div>
    </div>
    </>
  )
}

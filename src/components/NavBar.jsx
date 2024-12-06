import React, { useState,useRef } from 'react'
import {Link } from 'react-router-dom'
import { MdOutlineMenu, MdClose,} from 'react-icons/md';
import {BiLogoGmail} from 'react-icons/bi';
import { IoIdCardSharp } from "react-icons/io5";
import {AiFillHome,AiFillInfoCircle,} from 'react-icons/ai'
import { GiArchiveResearch } from "react-icons/gi";
import './NavBar.css'

function NavBar() {
//for open and close sidebar menu
const [showNav, SetShowNav] = useState(false);

//for closing sidebar menu onClick Outside
const outRef=useRef();
const manageOutsideClick =(e)=>{
  if(outRef&&outRef.current&&outRef.current.contains(e.target)){

  }
  else{SetShowNav(false);}
}
React.useEffect(()=>{
  document.addEventListener('click',manageOutsideClick);
  return()=>{document.removeEventListener('click',manageOutsideClick);}

},[]);




  return (

    <div className='navDiv' ref={outRef}>
        <Link to="/" className='logo'><span>P</span>ortfolio</Link>
        <div className='sidebaricon'ref={outRef} onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0}><MdOutlineMenu/></div>
        <ul ref={outRef} className={!showNav ? 'navitems hide-items' : 'navitems'}>
        <div className='closesidebar'  onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0}><MdClose/></div>
            <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/">Home<span className='navicon'><AiFillHome/></span></Link></li>
            <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/about">About<span className='navicon'><AiFillInfoCircle/></span></Link></li>
            <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/research">Research<span className='navicon '><GiArchiveResearch/></span></Link></li>
            <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/reflection">Reflection<span className='navicon '><IoIdCardSharp/></span></Link></li>
           {/* <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/testimonial">Testimonial<span className='navicon '><MdRateReview/></span></Link></li> */}
            <li><Link onClick={()=> SetShowNav(!showNav)} onKeyDown={()=> SetShowNav(!showNav)} role="button" tabIndex={0} to="/contact">Contact<span className='navicon '><BiLogoGmail/></span></Link></li>
        </ul>
    </div>
  )
}

export default NavBar
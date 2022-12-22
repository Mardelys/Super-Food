import React from 'react'
import './MenuBannerFooter.css'
import  LogoPrincipal from './images/Logo.png'
import Banner1 from './images/banner1.png'
import Banner2 from './images/banner2.png'
import {AiFillHome} from 'react-icons/ai'
//import {IoLogoWhatsapp} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import { Outlet,Link } from 'react-router-dom'
const MenuBanner = () => {
 return (
<>
   <header>
      <div>
         <img src={LogoPrincipal} className="img-logo" alt="Logo Marde" />
         <Link to="/category"><button className='btn-product'>Haz tu Pedido</button></Link>
         <nav className="navigation">
            <ul>
               <li>
                  <Link to="/"><AiFillHome className='icon-li'/></Link> 
               </li>
               <li>
                  <Link to="/shoppingcar"><MdShoppingCart className='icon-li'/></Link>
               </li>
               {/*<li>
                  <Link to=""<IoLogoWhatsapp className='icon-li'/>
               </li>*/}
            </ul>
         </nav>
      </div>
      <div className='container-banner'>
         {/*Radio buttons start- cualquier cosa si no sirve eliminar desde aqui y solo dejar la imagen banner 1*/}

         <input type="radio" name='radio-btn' id='radio1' />
         <input type="radio" name='radio-btn' id='radio2' />

         {/*Slides images start*/}
         <div className='slide first'>
            <img className="banner" src={Banner1} alt="" />
         </div>
         <div className='slide'>
            <img className="banner" src={Banner2} alt="" />
         </div>

         {/*Automatic navigation start*/}
         <div className='navigation-auto'>
            <div className='auto-btn1'></div>
            <div className='auto-btn2'></div>
         </div>
          {/*Manual navigation start*/}
         <div className='navigation-manual'>
            <label htmlFor="radio1" className='manual-btn'></label>
            <label htmlFor="radio2" className='manual-btn'></label>
         </div>
      </div>
      <Outlet />
   </header>
   
</>
)
}

 export default MenuBanner;
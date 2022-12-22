import React from 'react'
import './MenuBannerFooter.css'
import  LogoPrincipal from './images/Logo.png'
import Banner from './images/banner1.png'
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
                  <Link to="/home"><AiFillHome className='icon-li'/></Link> 
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
         <img className="banner" src={Banner} alt="" />
      </div>
      <Outlet />
   </header>
   
</>
)
}

 export default MenuBanner;
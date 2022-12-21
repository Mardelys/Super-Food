import React from 'react'
import '../styles/MenuBannerFooter.css'
import  LogoPrincipal from '../images/Logo.png'
import {AiFillHome} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
const MenuBannerFooter = () => {
 return (
<>
   <header>
      <img src={LogoPrincipal} className="img-logo" alt="Logo Marde" />
      <button className='btn-product'>Haz tu Pedido</button>
      <nav className="navigation">
         <ul>
            <li><AiFillHome className='icon-li'/></li>
            <li><MdShoppingCart className='icon-li'/></li>
            <li><IoLogoWhatsapp className='icon-li'/></li>
         </ul>
         <img id="banner" src="" alt="" />
      </nav>
   </header>
   
   <footer>

   </footer>
</>
)
}

 export default MenuBannerFooter;
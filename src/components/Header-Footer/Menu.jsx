import React from 'react'
import './MenuBannerFooter.css'
import  LogoPrincipal from './images/Logo.png'
import {AiFillHome} from 'react-icons/ai'
//import {IoLogoWhatsapp} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import { Outlet,Link } from 'react-router-dom'
import Footer from './Footer'

function Menu(){
 return (
<>
   <header>
      <div>
         <img src={LogoPrincipal} className="img-logo" alt="Logo Gustosos Ovejitos" />
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
   </header>
  
   <Outlet />
   <Footer />
   
</>
)
}

 export default Menu;
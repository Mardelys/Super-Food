import './MenuBannerFooter.css'
import  LogoPrincipal from './images/Logo.png'
import {AiFillHome} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import { Outlet,Link, NavLink} from 'react-router-dom'
import Footer from './Footer'


function Menu(){
   
   return (
   
   <>
   <header>
      <div>
         <img src={LogoPrincipal} className="img-logo" alt="Logo Gustosos Ovejitos" />
         <Link to="/combos"><button className='btn-product'>Haz tu Pedido</button></Link>
         <nav className="navigation">
            <ul>
               <li>
                  <Link to="/"><AiFillHome className='icon-li'/></Link> 
               </li>
               <li>
                  <NavLink to="/shoppingcar"><MdShoppingCart className='icon-li'/></NavLink>
               </li>
               {<li>
                  <a href='https://wa.link/2ecc6b'><IoLogoWhatsapp className='icon'/></a>
               </li>}
            </ul>
         </nav>
         
      </div>
      <span className='item_total'>0 </span>
      
   </header>
  
   <Outlet />
   <Footer />
   
</>
)
}

 export default Menu;
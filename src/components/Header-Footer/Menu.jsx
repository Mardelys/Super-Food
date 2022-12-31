
//
//dependencies are imported, react icons logos, react router dom routes
import './MenuBannerFooter.css'
import  LogoPrincipal from './images/Logo.png'
import {AiFillHome} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import { Outlet,Link, NavLink} from 'react-router-dom'
import Footer from './Footer'
import Banner from './images/banner1.png'
import Bannerr from './images/banner2.png'



//a menu function is created which contains the main routes, which we can call pages, these are 3 views, home, categories and shopping cart
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
     
   </header>
   <div className='container-banner'>
      <img src={Banner} className="banner_1" alt="" />
      </div> {/**
the menu will use a react routerdom component to render the routes in a specific section of the page, this is below the header and between the footer, which are specified in the component */}
   
   <Outlet />
   <Footer />
   
</>
)
}

 export default Menu;
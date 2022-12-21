import React from 'react'
import '../styles/MenuBannerFooter.css'
import  '../images/Logo.png'

const MenuBannerFooter = () => {
 return (
<>
   <header>
      <nav>
         <img src="../images/Logo.png" alt="" />
         <button>Pedido</button>
         <ul>
            <li>Carrito</li>
            <li>Home </li>
            <li>Whatsapp </li>
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
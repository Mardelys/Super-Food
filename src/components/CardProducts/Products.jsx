//the necessary dependencies are imported

import './CardProducts.css'
import CardProducts, {CardProductsAd} from "./CardProducts"
import { ProductItems } from "./Items";



//
//To define the routes I used separate functions so that it will render only the cards with a specific category, in this way it draws only the cards corresponding to the category


//
//there are 6 functions in total
export default function Combos(){
  // console.log(ProductItems);
   return (
 <>
 <h1 className="titulo-section">Combos</h1>
 <section className="container-cards-products">

   {/* Through this items.filtrer I was able to filter the products by categories specifying in the conditional which they belong to, the map method is also used to draw the card with its props referenced in the json*/}
   {ProductItems.items.filter(product=> product.category === "combo" ).map(product=>(<CardProducts
    key={product.id}
    id={product.id}
   index={product.index}
    image={product.image}
    title={product.title}
    description={product.description}
    price={product.price}
    quantity={product.quantity} />))}
</section>
</>
   )}

   export function Hamburguesas(){
      return (
         <>
         <h1 className="titulo-section">Hamburguesas</h1>

         <section className="container-cards-products">
         {ProductItems.items.filter(product=> product.category === "hamburguesa" ).map(product=>(<CardProducts
   key={product.id}
   id={product.id}
    image={product.image}
    title={product.title}
    index={product.index}
    description={product.description}
    price={product.price}/>))}
      </section>
      </>

      )}

export function Perros(){
   return (
      <>
     <h1 className="titulo-section">Perros Calientes</h1>
      <section className="container-cards-products">
      {ProductItems.items.filter(product=> product.category === "perro" ).map(product=>(<CardProducts
    key={product.id}
    id={product.id}
    image={product.image}
    title={product.title}
    index={product.index}
    description={product.description}
    price={product.price}/>))}
   </section>
   </>
)}


export function Patacones(){
   return (
      <>
      <h1 className="titulo-section">Patacones</h1>
   <section className="container-cards-products">
   {ProductItems.items.filter(product=> product.category === "patacon" ).map(product=>(<CardProducts
    key={product.id}
    id={product.id}
    image={product.image}
    index={product.index}
    title={product.title}
    description={product.description}
    price={product.price}/>))}
   </section></>
)}


export function Arepas(){
   return (
      <>
   <h1 className="titulo-section">Arepitas Cabimeras</h1>
      <section className="container-cards-products">
      {ProductItems.items.filter(product=> product.category === "arepa" ).map(product=>(<CardProducts
    key={product.id}
    id={product.id}
    image={product.image}
    title={product.title}
    index={product.index}
    description={product.description}
    price={product.price}/>))}
      </section>
      </>
)}
export function Gya(){

   return (
   <>

 <h1 className="titulo-section">Bebidas y Adicionales</h1>
   <section className="container-cards-products">
   {ProductItems.items.filter(product=> product.category === "gya" ).map(product=>(<CardProducts
   id={product.id}
   key={product.id}
    image={product.image}
    title={product.title}
    index={product.index}
    description={product.description}
    price={product.price}/>))}
   </section>
  <div className="container-card-adic">

  {ProductItems.items.filter(product=> product.category === "adic").map(product=>(<CardProductsAd
   key={product.id}
   id={product.id}
   image={product.image}
   index={product.index}
   title={product.title}
   price={product.price}/>))}

 
  </div>
</>
)}

   
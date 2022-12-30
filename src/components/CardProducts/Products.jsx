import './CardProducts.css'
import CardProducts, {CardProductsAd} from "./CardProducts"
import { ProductItems } from "./Items";




export default function Combos(){

   return (
 <>
 <h1 className="titulo-section">Combos</h1>
 <section className="container-cards-products">
   {ProductItems.items.filter(product=> product.category === "combo" ).map(product=>(<CardProducts
   key={product.id}
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
    image={product.image}
    title={product.title}
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
    image={product.image}
    title={product.title}
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
    image={product.image}
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
    image={product.image}
    title={product.title}
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
   key={product.id}
    image={product.image}
    title={product.title}
    description={product.description}
    price={product.price}/>))}
   </section>
  <div className="container-card-adic">

  {ProductItems.items.filter(product=> product.category === "adic").map(product=>(<CardProductsAd
   key={product.id}
   title={product.title}
   price={product.price}/>))}

 
  </div>
</>
)}

   
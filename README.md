# Super Food

Super food es un emprendimiento de Mardelys Torres, vende comida rápida, maneja 5 categorías de comidas y 1 de bebidas, trabaja y vive en la ciudad de Bogotá vive en CALLE 185b #8d-55 Lijaca trabaja en eun carrito de comida que coloca frente a su casa de Jueves a Domingo en el  HORARIO: 6:00pm a 11:00pm, las redes sociales que maneja es el facebook(https://www.facebook.com/lilimar.arrieta) e instagram (https://www.instagram.com/gustososovejitos_/?hl=es).

**Contexto del proyecto**
    Este será tu primer reto profesional enfocado en un cliente real, tendrás que sacar tus habilidades de comunicación asertiva y tus habilidades de manejo de cliente.
    
⚙️**Requerimientos técnicos Productos:**

El desarrollo debe contar con filtros de categorías para los diversos productos Los productos deben tener botones para agregar productos uno en uno y también para quitarlos del carrito de compra Mínimo 2 Categorías Mínimo 5 Productos Los productos deben contar con características específicas Los productos deben tener valores por unidad (si es por cantidad debe tener la especificación y la suma automática ) 

⚙️**Requerimientos técnicos Carrito de compras:**

El carrito debe mostrar la lista de productos seleccionados por el usuario final El carrito debe tener botones para agregar productos uno en uno y también para quitarlos del carrito de compra El carrito debe mostrar la sumatoria del valor de todos los productos El carrito debe tener un Botón de comprar que nos conduzca a WhatsApp para solicitar el domicilio trayendo toda la informacion del resumen del carrito de compra.


# Mockups First-Mobile

Los mockups se realizaron con las especificaciones dadas por el cliente, los colores elegidos por él, el logo suministrado y además el menú en el que se basa la aplicación, definiendo 6 categorias.
En la primera página del mockups se observa el inicio/home el cual contiene la información del negocio, de alli un botón redirecciona a la seccion de categorías que es la segunda vista que se observa en el mockup, para la 3ra vista que se observa, es una vista larga porque se quiso hacer entender que cuando se clickaran las categorias se haría el despliegue de las cards correspondientes por categorías, no se hizo cada card abierta para no repetir el diseño, y por último la vista del carrito de compras donde se pueden modificar los productos (Agregar, quitar y eliminar productos seleccionados) tambien poseeun botón que tendrá el fin de redireccionar al cliente con el vendedor.



-Se hicieron algunas modificaciones en cuanto al diseño para facilitar la navegacion del usuario, el botón queda fijo en la pantalla para que el cliente pueda culminar su pedido cuando guste, es responsive, desarrollado mobile-first, tiene botones de contactos a whatsapp y posee un carrito funcional.


**Planteamiento estructuras de carpetas**
-Inicialmente se definieron las carpetas en 2 grandes en las cuales estilos estaban separados de componentes, sin embargo despues de investigar y durante el proceso de desarrollo del proyecto resulto ser mas facĺ crear una carpeta por componente, en esta se encontraban todos sus recursos especificos, componente, estilos e imágenes, así mismo se elaboraron 5 grandes carpetas:



- CardProducts(ruta: ../src/components/CardProducts):  está compuesta por La estructuras de las card de los productos(CardProducts.jsx), la data(Items.js), la asignación de las props y el map para recorrer el arreglo en el componente products(Product.jsx), tambien contiene los estilos e imágenes correspondientes.



- Category(ruta: ../src/components/Category):: Esta carpeta contiene 2 componentes, la estructuras de los botones de la categoría en un componente llamado ButtonCategory.jsx  y este componente es usado 6 veces para crear las 6 categorías de la aplicación, se encuentra en el documento Category.jsx, se uso react-router-dom para podercrear las rutas y filtrar las categorías.Tambien contiene sus estilos e imágenes correspondientes.




- Header-Footer(ruta: ../src/components/Header-Footer): esta carpeta contiene el header(menu) y el footer, en el header se utilizo react router dom para definir las rutas de las paginas a utilizar en la aplicación, home, category y Shoppingcart, contienen sus imágenes y estilos.






- Home(ruta: ../src/components/Home): esta carpeta contiene la sección principal que corresponde a la descripción del negocio, contiene imagenes y estilos, es un componente no funcional.






- ShoppinCar(ruta: ../src/components/ShoppingCar):: esta carpeta contiene el componente de Carrito de compra, donde se renderizarán los productos seleccionados por el usuario. este posee sus estilos.





- Componente reducer(ruta: ../src/components/Reducer.js): este componente contiene las funciones que lleva a cabo el carrito de compras, tales como agregar productos, remover, sumar y restar productos.Reduces.Js.

 - Componente App.jsx e index.js: el componente index posee la estructura con el html donde se encuentra un div con el id root, con el cual se hace referencia en App.jsx para renderizar toda nuestra aplicación



Carpeta padre components
Carpetas hijas/hermanas: CardProducts,Category,Header-Footer,Home,ShoppingCar,Reducer.js(componente)
Archivos hermanos de components: App.jsx,Index.js,y una carpeta styles que contiene los estilos de app e index.


**Desarrollo del proyecto y mi experiencia con el usuario**

Para el desarrollo del proyecto realicé los mockups y prototipo a tiempo puesto que mi cliente tenía marca personal, se modificó un poco el logo, y se diseñaron imágenes de combos con recursos libres de derechos de autor en internet, mi clienta Lilimar González estuvo dispuesta a colaborarme en todo momento, me dió su menú y me proporcionó la mayoría de las fotos utilizadas para sus productos.

Al recibir el prototipo le gusto, más tuve que explicarle la idea de lo que significaba la sección larga de productos que diseñé, sin embargo no hubo quejas, solo sugerencias con respecto a que quería sus fotos.

Con respecto a las fotos, demoró varios días en entregarmelas por que estaba ocupada, igualmente seguí con el proyecto con las imagenes de prueba que use en el mockups.

Ya finalizado el proyecto recibí esta opinión de mi clienta, quedando contenta con lo que se desarrollo.





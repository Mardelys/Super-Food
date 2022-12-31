
#Gustosos Ovejitos

Gustosos Ovejitos es un emprendimiento de Lilimar Gonzalez, vende comida rápida, maneja 5 categorías de comidas y 1 de bebidas, trabaja y vive en la ciudad de Cabimas /Estado Zulia -Venezuela vive en CALLE SAN RAFAEL, SECTOR 5 BOCAS. CASA #54, trabaja en eun carrito de comida que coloca frente a su casa de Jueves a Domingo en el  HORARIO: 6:00pm a 11:00pm, las redes sociales que maneja es el facebook(https://www.facebook.com/lilimar.arrieta) e instagram (https://www.instagram.com/gustososovejitos_/?hl=es).

**Contexto del proyecto**
    Este será tu primer reto profesional enfocado en un cliente real, tendrás que sacar tus habilidades de comunicación asertiva y tus habilidades de manejo de cliente.
    
⚙️**Requerimientos técnicos Productos:**

El desarrollo debe contar con filtros de categorías para los diversos productos Los productos deben tener botones para agregar productos uno en uno y también para quitarlos del carrito de compra Mínimo 2 Categorías Mínimo 5 Productos Los productos deben contar con características específicas Los productos deben tener valores por unidad (si es por cantidad debe tener la especificación y la suma automática ) 

⚙️**Requerimientos técnicos Carrito de compras:**

El carrito debe mostrar la lista de productos seleccionados por el usuario final El carrito debe tener botones para agregar productos uno en uno y también para quitarlos del carrito de compra El carrito debe mostrar la sumatoria del valor de todos los productos El carrito debe tener un Botón de comprar que nos conduzca a WhatsApp para solicitar el domicilio trayendo toda la informacion del resumen del carrito de compra.


#Mockups First-Mobile

Los mockups se realizaron con las especificaciones dadas por el cliente, los colores elegidos por él, el logo suministrado y además el menú en el que se basa la aplicación, definiendo 6 categorias.
En la primera página del mockups se observa el inicio/home el cual contiene la información del negocio, de alli un botón redirecciona a la seccion de categorías que es la segunda vista que se observa en el mockup, para la 3ra vista que se observa, es una vista larga porque se quiso hacer entender que cuando se clickaran las categorias se haría el despliegue de las cards correspondientes por categorías, no se hizo cada card abierta para no repetir el diseño, y por último la vista del carrito de compras donde se pueden modificar los productos (Agregar, quitar y eliminar productos seleccionados) tambien poseeun botón que tendrá el fin de redireccionar al cliente con el vendedor.

![Captura de pantalla de 2022-12-30 23-26-02](https://user-images.githubusercontent.com/114613889/210124728-2517dfa6-3a5e-45a5-a72b-94208e2450b8.png)



# Proyecto desarrollado en react


![Captura de pantalla de 2022-12-30 23-05-40](https://user-images.githubusercontent.com/114613889/210124445-2c84f6cc-473d-4109-bc10-8f92f06fe534.png)


-Se hicieron algunas modificaciones en cuanto al diseño para facilitar la navegacion del usuario, el botón queda fijo en la pantalla para que el cliente pueda culminar su pedido cuando guste, es responsive, desarrollado mobile-first, tiene botones de contactos a whatsapp y posee un carrito funcional.


**Planteamiento estructuras de carpetas**
-Inicialmente se definieron las carpetas en 2 grandes en las cuales estilos estaban separados de componentes, sin embargo despues de investigar y durante el proceso de desarrollo del proyecto resulto ser mas facĺ crear una carpeta por componente, en esta se encontraban todos sus recursos especificos, componente, estilos e imágenes, así mismo se elaboraron 5 grandes carpetas:
![Captura de pantalla de 2022-12-30 23-40-11](https://user-images.githubusercontent.com/114613889/210125127-cb8f5fbe-b9f8-4a49-81c3-7d084c389bbd.png)

- CardProducts(ruta: ../src/components/CardProducts):  está compuesta por La estructuras de las card de los productos(CardProducts.jsx), la data(Items.js), la asignación de las props y el map para recorrer el arreglo en el componente products(Product.jsx), tambien contiene los estilos e imágenes correspondientes.

![Captura de pantalla de 2022-12-30 23-44-47](https://user-images.githubusercontent.com/114613889/210125252-12ecd8aa-b61a-4281-9f95-2d767e5078a0.png)

- Category(ruta: ../src/components/Category):: Esta carpeta contiene 2 componentes, la estructuras de los botones de la categoría en un componente llamado ButtonCategory.jsx  y este componente es usado 6 veces para crear las 6 categorías de la aplicación, se encuentra en el documento Category.jsx, se uso react-router-dom para podercrear las rutas y filtrar las categorías.Tambien contiene sus estilos e imágenes correspondientes.

![Captura de pantalla de 2022-12-30 23-53-10](https://user-images.githubusercontent.com/114613889/210125360-2fc74613-aa4b-43a0-a47c-c5d20d6eaf0a.png)

-Header-Footer(ruta: ../src/components/Header-Footer): esta carpeta contiene el header(menu) y el footer, en el header se utilizo react router dom para definir las rutas de las paginas a utilizar en la aplicación, home, category y Shoppingcart, contienen sus imágenes y estilos.
![Captura de pantalla de 2022-12-30 23-57-09](https://user-images.githubusercontent.com/114613889/210125446-f8435ea1-2a36-49d8-83b1-0916e7ef04c1.png)


-Home(ruta: ../src/components/Home): esta carpeta contiene la sección principal que corresponde a la descripción del negocio, contiene imagenes y estilos, es un componente no funcional.
![Captura de pantalla de 2022-12-30 23-59-34](https://user-images.githubusercontent.com/114613889/210125493-2a7ddc3d-41df-4674-be7e-063f78f47dce.png)

- ShoppinCar(ruta: ../src/components/ShoppingCar):: esta carpeta contiene el componente de Carrito de compra, donde se renderizarán los productos seleccionados por el usuario. este posee sus estilos.
![Captura de pantalla de 2022-12-31 00-02-41](https://user-images.githubusercontent.com/114613889/210125553-1d548e28-116a-43b1-b450-d9255f016a50.png)


-Componente reducer(ruta: ../src/components/Reducer.js): este componente contiene las funciones que lleva a cabo el carrito de compras, tales como agregar productos, remover, sumar y restar productos.Reduces.Js.

-Componente App.jsx e index.js: el componente index posee la estructura con el html donde se encuentra un div con el id root, con el cual se hace referencia en App.jsx para renderizar toda nuestra aplicación

-![Captura de pantalla de 2022-12-31 00-11-51](https://user-images.githubusercontent.com/114613889/210125775-fafb5d03-ad9b-460e-96ef-458b7e0f17ef.png)

Carpeta padre components
Carpetas hijas/hermanas: CardProducts,Category,Header-Footer,Home,ShoppingCar,Reducer.js(componente)
Archivos hermanos de components: App.jsx,Index.js,y una carpeta styles que contiene los estilos de app e index.

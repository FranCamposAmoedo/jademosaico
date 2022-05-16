# Ecommerce Jade Mosaico

_Jade Mosaico es un Ecommerce de productos artesanales hechos con venecitas_

## Comenzando 🚀

_En la rama master, cloná el repositorio_

### Pre-requisitos 📋

_Necesitas tener algún editor de código para poder ejecutar la aplicación y conexión a internet_

```
Editor de código (Recomendamos Visual Studio Code)
Acceso a internet
```

### Instalación 🔧

_Una vez descargado tenés que instalar las dependencias en la pc_

_Dentro del Visual Studio Code, abrí la terminal y ejecutá:_

```
cd "nombre de la carpeta raíz"
```

_Luego:_

```
npm install
```

_y por último ejecutá:_

```
npm start
```

_Una vez hecho ésto, se abrirá el proyecto en tu navegador Web_

## Haciendo una compra en la App ⚙️

* Dentro de la App va a aparecer un catálogo con diferentes productos y un NavBar para poder elegir por categoría. 
* Clickeando en el botón Ver detalles de cualquier producto, se despliega la descripción del producto, el precio y un contador para agregar unidades al carrito. El botón agregar al carrito, además de agregar el producto al carrito, despliega un nuevo botón que es terminar compra. 
* Clickeando en ese botón o en el carrito se accede a todos los productos agregados y en éste punto se pueden borrar uno por uno, vaciar el carrito o finalizar la compra.
* Si se clickea finalizar la compra, se muestra un formulario que hay que completar con los datos del usuario y la dirección de envío. Una vez enviado, nos entrega el nro de orden en caso de que la operación haya concluido satisfactoriamente.

![JadeMosaico](https://user-images.githubusercontent.com/89227073/168498543-b2cfc52a-fdfc-4e48-8212-22955dca8bec.gif)

### Componentes 🔩

_Los componentes están organizados en 5 grandes carpetas que a su vez estás contienen subcarpetas, éstas son:_

* **Cart** - Contiene el carrito de las compras dónde a través del llamado al componente ItemCart se van cargando los productos seleccionados con la cantidad y el total.
Dentro de Cart también se encuentra:
* ItemCart - Muestra cada producto seleccionado dentro de Cart y permite borrarlo.
* ConfirmOrder - Contiene la lógica para generar la orden de compra. Chequea si hay stock del producto, actualiza el stock. Dentro del form, toma los datos del comprador y los pushea a Firebase generando un nro de orden de compra y vaciando luego el carrito.

* **Footer** - Contiene los derechos de autor y las redes sociales del proyecto.

* **ItemDetailContainer** - Contenedor que mediante el componente ItemDetail, muestra el producto seleccionado.
Dentro de también se encuentran:
* ItemCount - Recibe el valor inicial, el stock y la función onAdd para poder incrementar o decrementar la cantidad de productos y retorna 3 botones, +, - y agregar al carrito.
* ItemDetail - Recibe las propiedades del producto a través de parámetros y funciones del context. Retorna el detalle del producto junto con el ItemCount.

* **ItemListContainer** - Contenedor de todos los objetos que se cargan mediante ItemList. También filtra por categoría.
La carpeta tiene también:
* Item - La card del producto con el botón ver detalles.
* ItemList - Un map de todos los productos para poder mostrarlos en el container.

* **NavBar** - Carga las diferentes categorías desde el Firebase. Contiene el logo y el Cart Widget.
* CartWidget - Obtiene la cantidad de productos del context y la muestra cuando hay algún producto en el carrito. Si no permanece oculto.

Por fuera de la carpeta de components, se encuentran 2 carpetas más.

* **Context** - Contiene la lógica y las funciones que luego se deben utilizar en varios componentes. Éstos son: agregar producto, obtener la cantidad total de productos, validad si el producto ya está en el carrito, vaciar carrito, remover producto, obtener la cantidad de un producto y obtener el total.

* **Notification** - Muestra un mensaje del tipo alert cuando el comprador hace click en agregar al carrito indicando la cantidad de productos agregados y el nombre del producto.

### Carpeta Public y Firestore ⌨️

_Dentro de la carpeta Public se encuentra la carpeta images, dónde están todas las imágenes del proyecto.
En Firebase está la base de datos de los productos, las categorías y cuando se hace la orden de compra se guardan los datos del usuario._

## Construido con 🛠️

_Se utilizaron las siguientes herramientas:_

* [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
* [BOOTSTRAP](https://getbootstrap.com/)
* [JAVASCRIPT](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [REACT](https://es.reactjs.org/docs/getting-started.html)

## Autores ✒️

* **Francisco Campos Amoedo** - [FranCamposAmoedo](https://github.com/FranCamposAmoedo)

## Expresiones de Gratitud 🎁

* Gracias a mi profesor [Sebastián Zuviria](https://github.com/szuviria) y a mi tutor Rodrigo Maestre que sin ellos no hubiese sido posible.
* Comenta a otros sobre este proyecto 📢
* Muchas gracias por compartir!
---
⌨️ con ❤️ por [FranCamposAmoedo](https://github.com/FranCamposAmoedo) 😊

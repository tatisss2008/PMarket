
//Migracion 
npx prisma migrate dev

npx ts-jest config:init

npm test



// DICCIONARIO DATOS

Product:

id: (integer) Identificador único del producto.
name: (string) Nombre del producto.
description: (string) Descripción del producto.
price: (integer) Precio del producto.
quantity: (integer) Cantidad disponible del producto.
cart: (array of Cart objects) Carritos en los que está incluido el producto.
photos: (array of ProductPhoto objects) Fotos asociadas al producto.
categories: (array of ProductCategory objects) Categorías a las que pertenece el producto.
stocks: (array of Stock objects) Registros de inventario relacionados con el producto.
sales: (array of Sale objects) Ventas registradas para el producto.
Photo:

id: (integer) Identificador único de la foto.
url: (string) URL de la foto.
description: (string) Descripción de la foto (opcional).
productsPhotos: (array of ProductPhoto objects) Relación entre productos y fotos.
categoryPhotos: (array of CategoryPhoto objects) Relación entre categorías y fotos.
ProductPhoto:

idProduct: (integer) Identificador del producto relacionado.
product: (Product object) Producto relacionado.
idPhoto: (integer) Identificador de la foto relacionada.
photo: (Photo object) Foto relacionada.
Category:

id: (integer) Identificador único de la categoría.
name: (string) Nombre de la categoría.
title: (string) Título de la categoría.
description: (string) Descripción de la categoría.
photos: (array of CategoryPhoto objects) Fotos asociadas a la categoría.
products: (array of ProductCategory objects) Productos pertenecientes a la categoría.
CategoryPhoto:

idCategory: (integer) Identificador de la categoría relacionada.
category: (Category object) Categoría relacionada.
idPhoto: (integer) Identificador de la foto relacionada.
photo: (Photo object) Foto relacionada.
ProductCategory:

idProduct: (integer) Identificador del producto relacionado.
product: (Product object) Producto relacionado.
idCategory: (integer) Identificador de la categoría relacionada.
category: (Category object) Categoría relacionada.
Cart:

id: (integer) Identificador único del carrito.
productId: (integer) Identificador del producto en el carrito.
quantity: (integer) Cantidad del producto en el carrito.
userId: (integer) Identificador del usuario dueño del carrito.
product: (Product object) Producto relacionado.
user: (User object) Usuario relacionado.
User:

id: (integer) Identificador único del usuario.
name: (string) Nombre del usuario (opcional).
email: (string) Correo electrónico del usuario (único).
address: (string) Dirección del usuario (opcional).
phone: (string) Teléfono del usuario (opcional).
cart: (array of Cart objects) Carritos asociados al usuario.
Stock:

id: (integer)Identificador único del registro de inventario.
idProduct: (integer) Identificador del producto relacionado.
quantity: (integer) Cantidad de producto en inventario.
date: (datetime) Fecha del registro de inventario.
product: (Product object) Producto relacionado.
Sale:

id: (integer) Identificador único de la venta.
idProduct: (integer) Identificador del producto vendido.
quantity: (integer) Cantidad de producto vendida.
date: (datetime) Fecha de la venta.
product: (Product object) Producto relacionado.
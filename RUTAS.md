RUTAS PARA NO PERDER TIEMPO

_CART_ 

GET cart // http://localhost:8080/cart

GET cart by id // http://localhost:8080/cart/64832377c0b2b193c2a6c386

POST product to cart // http://localhost:8080/cart/64832377c0b2b193c2a6c386/6483265348d283b1ad84d31c

DELETE cart // http://localhost:8080/cart/64832377c0b2b193c2a6c386

DELETE product from cart // http://localhost:8080/cart/64832377c0b2b193c2a6c386/products/6481bfb0bd413f32db3170af

PUT quantity from product in cart // http://localhost:8080/cart/64832377c0b2b193c2a6c386/products/6481bfb0bd413f32db3170af


///////////////////////////////////////////////////////////////////////

_PRODUCTS_

GET products // http://localhost:8080/products

GET product by id // http://localhost:8080/products/6483265348d283b1ad84d31c

POST Product // http://localhost:8080/products 
{
    "title": "Producto agregado NUEVO",
    "description": "Descripción del producto NUEVO",
    "price": 14.99,
    "__v": 0,
    "quantity": 2
}

PUT product // http://localhost:8080/products/6483265348d283b1ad84d31c

DELETE product // http://localhost:8080/products/6483265348d283b1ad84d31c

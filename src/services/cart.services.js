import { getCart, getCartById, addProductToCart, deleteProductFromCart, deleteCart, createCart } from "../dao/cart.dao.js";
import { cartModel } from "../dao/models/cart.model.js";

export const getCartService = async () => {
  try {
    return await getCart();
  } catch (error) {
    console.log(error);
  }
}

export const createCartService = async (res) => {
  try {
    return await createCart();
  } catch (error) {
    console.log(error);
  }
}

export const getCartByIdService = async (id) => {
  try {
    return await getCartById(id);
  } catch (error) {
    console.log(error);
  }
}

export const addProductToCartService = async (id, idprod) => {
  try {
    return await addProductToCart(id, idprod);
  } catch (error) {
    console.log(error);
  }
}

export const deleteProductFromCartService = async (id, productId) => {
  try {
    return await deleteProductFromCart(id, productId);
  } catch (error) {
    console.log(error);
  }
}

export const deleteCartService = async (id) => {
  try {
    return await deleteCart(id);
  } catch (error) {
    console.log(error);
  }
}

/* export const updateProductCartService = async (id, productId, updatedFields) => {
  try {
    const updatedCart = await updateProductCart(id, productId, updatedFields);
    if (!updatedCart) {
      throw new Error('Cart not found');
    }
    return updatedCart;
  } catch (error) {
    throw error;
  }
}; */

export const updateProductQuantityService = async (cartId, productId, quantity) => {
  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      throw new Error('Cart not found');
    }

    const productToUpdate = cart.carrito.find((product) => product._id.toString() === productId);
    if (!productToUpdate) {
      throw new Error('Product not found in cart');
    }

    console.log('Product before update:', productToUpdate); // Imprime el producto antes de la actualización

    console.log(updateProductQuantityService)
    productToUpdate.quantity = quantity; // Actualiza la cantidad del producto

    console.log('Product after update:', productToUpdate); // Imprime el producto después de la actualización

    await cart.save(); // Guarda los cambios en el carrito
    return productToUpdate; // Devuelve el producto actualizado
  } catch (error) {
    console.log(error);
    throw error;
  }
};

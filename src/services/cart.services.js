import { getCart, getCartById, addProductToCart, deleteProductFromCart, deleteCart, updateProductCart, createCart } from "../dao/cart.dao.js";

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

export const updateProductCartService = async (id, productId) => {
  try {
    const updatedCart = await updateProductCart(id, productId);
    if (!updatedCart) {
      throw new Error('Cart not found');
    }
    return updatedCart;
  } catch (error) {
    throw error;
  }
}


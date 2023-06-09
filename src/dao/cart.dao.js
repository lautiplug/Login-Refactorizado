import mongoose from 'mongoose';
import { cartModel } from './models/cart.model.js';

export const getCart = async () => {
    try {
        return await cartModel.find({});
    } catch (error) {
        console.log(error);
    }
}

export const createCart = async () => {
    try {
        const cart = new cartModel();
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const getCartById = async (id) => {
    try {
        const cart = await cartModel.findById(id);
        return cart;
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCart = async (id, idprod) => {
    try {
        const cart = await cartModel.findById(id);
        cart.carrito.push(idprod);
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductFromCart = async (id, productId) => {
    try {
        const cart = await cartModel.findById(id);
        const productIndex = cart.carrito.findIndex(product => product._id == productId);
        cart.carrito.splice(productIndex, 1);
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const deleteCart = async (id) => {
    try {
        return await cartModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

export const updateProductQuantity = async (cartId, productId, quantity) => {
    try {
      const cart = await cartModel.findById(cartId);
      if (!cart) {
        throw new Error('Cart not found');
      }
  
      const productToUpdate = cart.carrito.find((product) => product._id.toString() === productId.toString());
      if (!productToUpdate) {
        throw new Error('Product not found in cart');
      }
  
      productToUpdate.quantity = quantity;
  
      await cart.save();
  
      return productToUpdate;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

/* export const updateProductCart = async (id, productId, updatedFields) => {
    try {
      const cart = await cartModel.findById(id);
      if (!cart) {
        throw new Error('Cart not found');
      }
  
      const productToUpdate = cart.carrito.find((product) => product._id.toString() === productId);
      if (!productToUpdate) {
        throw new Error('Product not found in cart');
      }
  
      console.log('Product before update:', productToUpdate); // Imprime el producto antes de la actualización
  
      productToUpdate.title = updatedFields.title;
      productToUpdate.description = updatedFields.description;
      productToUpdate.price = updatedFields.price;
  
      console.log('Product after update:', productToUpdate); // Imprime el producto después de la actualización
  
      await cart.save(); // Guarda los cambios en el carrito
  
      return cart; // Devuelve el carrito completo actualizado
    } catch (error) {
      console.log(error);
      throw error;
    }
  }; */
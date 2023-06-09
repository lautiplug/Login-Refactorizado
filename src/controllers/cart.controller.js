import { getCartService, getCartByIdService, addProductToCartService, deleteCartService, deleteProductFromCartService, createCartService, updateProductQuantityService } from "../services/cart.services.js";

export const getCartController = async (req, res, next) => {
    try {
        const cart = await getCartService();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const createCartController = async (req, res, next) => {
    try {
        const cart = await createCartService();
        return res.status(201).json({ message: 'Cart created successfully', cart: cart });
    } catch (error) {
        next(error);
    }
}

export const getCartByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cart = await getCartByIdService(id);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const addProductToCartController = async (req, res, next) => {
    try {
        const { id, idprod } = req.params;
        const cart = await addProductToCartService(id, idprod);
        return res.status(200).json({ message: 'Product added to cart successfully', cart: cart });
    } catch (error) {
        next(error);
    }
}

export const deleteProductFromCartController = async (req, res, next) => {
    try {
        const { id, productId } = req.params;
        const cart = await deleteProductFromCartService(id, productId);
        return res.status(200).json({ message: 'Product deleted from cart successfully', cart: cart });
    } catch (error) {
        next(error);
    }
}

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cart = await deleteCartService(id);
        return res.status(200).json({ message: 'Cart deleted successfully', cart: cart });
    } catch (error) {
        next(error);
    }
}

export const updateProductQuantityController = async (req, res, next) => {
    try {
      const { cid, pid } = req.params;
      const { quantity } = req.body;
  
      const updatedCart = await updateProductQuantityService(cid, pid, quantity);
      if (!updatedCart) {
        return res.status(404).json({ message: 'Cart or product not found' });
      }
  
      return res.status(200).json({ message: 'Product quantity updated successfully', cart: updatedCart });
    } catch (error) {
      next(error);
    }
  };
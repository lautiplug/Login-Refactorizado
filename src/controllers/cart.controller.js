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

/* export const updateProductCartController = async (req, res, next) => {
    try {
      const { id, productId } = req.params;
      const { title, description, price } = req.body; // Obtener los campos actualizados del producto
      const updatedFields = { title, description, price }; // Crear un objeto con los campos actualizados
        
      const updatedProduct = await updateProductCartService(id, productId, updatedFields);
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
  
      return res.status(200).json({ message: 'Product updated successfully', cart: updatedProduct.carrito });
    } catch (error) {
      next(error);
    }
  }; */

  export const updateProductQuantityController = async (req, res, next) => {
    try {
      const { cid, pid } = req.params;
      const { quantity } = req.body; // Obtener la cantidad actualizada desde req.body
  
      const updatedCart = await updateProductQuantityService(cid, pid.toString(), quantity);
      if (!updatedCart) {
        return res.status(404).json({ message: 'Cart or product not found' });
      }
  
      return res.status(200).json({ message: 'Product quantity updated successfully', cart: updatedCart });
    } catch (error) {
      next(error);
    }
  };
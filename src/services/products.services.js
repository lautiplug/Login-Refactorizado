import {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
  } from '../dao/products.dao.js';
  
  export const getProductsService = async () => {
    try {
      const { docs: products } = await getProducts();
      return products;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getProductByIdService = async (id) => {
    try {
      return await getProductById(id);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const addProductService = async (product) => {
    try {
      await addProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateProductService = async (id, product) => {
    try {
      await updateProduct(id, product);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteProductService = async (id) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
  };
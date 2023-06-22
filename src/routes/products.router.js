import express from 'express';
import {
  getProductsService,
  getProductByIdService,
  addProductService,
  updateProductService,
  deleteProductService,
} from '../services/products.services.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await getProductsService(); 
    const user = req.session.user;
    res.render('products', { products, user });
  } catch (error) {
    console.log(error);
    res.redirect('/views/error');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  res.render('product', { product });
});

router.post('/', async (req, res) => {
  const product = req.body;
  await addProductService(product);
  res.redirect('/products');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  await updateProductService(id, product);
  res.redirect('/products');
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deleteProductService(id);
  res.redirect('/products');
});

export default router;
import { getCartByIdController, getCartController, addProductToCartController, deleteProductFromCartController, deleteCartController, createCartController, updateProductQuantityController } from "../controllers/cart.controller.js";
import { Router } from 'express';

const router = Router();

router.get('/', getCartController);
router.post('/', createCartController);
router.get('/:id', getCartByIdController);
router.post('/:id/:idprod', addProductToCartController);
router.delete('/:id', deleteCartController);
router.delete('/:id/product/:productId', deleteProductFromCartController);
/* router.put('/:id/product/:productId', updateProductCartController); */
router.put('/:cid/products/:pid', updateProductQuantityController);

export default router;
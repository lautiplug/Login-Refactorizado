import './db/db.js';
import express from 'express';
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
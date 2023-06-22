import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { __dirname } from './utils.js';
import userRouter from './routes/users.router.js';
import viewsRouter from './routes/userViews.router.js';
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import MongoStore from 'connect-mongo';
import exphbs from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import handlebars from 'handlebars'; // Importa el módulo handlebars

import './db/db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

const hbs = exphbs.create({
  handlebars: allowInsecurePrototypeAccess(handlebars),
});

app.engine('handlebars', hbs.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(
  session({
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000,
    },
    store: MongoStore.create({
      mongoUrl: 'mongodb+srv://lautitheplug-admin:CsEoE72L0iH0zVmP@lautiplug.3ka4qbc.mongodb.net/coderhouse',
    }),
  })
);

app.use('/users', userRouter);
app.use('/views', viewsRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));

export default app;
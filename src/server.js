// Dependencias
import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import mongoStore from 'connect-mongo'
import passport from 'passport';
import exphbs from 'express-handlebars';
import { __dirname } from './utils.js'
import handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import 'dotenv/config'

// archivos locales
import './db/db.js'
import './passport/github-passport.js'
import './passport/strategies.js';
import './db/db.js';
import { viewsRouter, cartRouter, productsRouter, usersRouter } from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js'

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
app.use(express.static('public'))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  session({
    secret: 'sessionKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000
    },
    store: new mongoStore({
      mongoUrl: process.env.MONGO_ATLAS_URL,
      ttl: 10,
    }),
  })
)

app.use(errorHandler);
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);
app.use('/views', viewsRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));

export default app;


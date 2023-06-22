import { Router } from 'express';
import UserDao from '../dao/user.dao.js';
import { logoutUserController } from '../controllers/user.controller.js';

const userDao = new UserDao();
const router = Router();

router.post('/register', async (req, res) => {
  try {
    const newUser = await userDao.createUser(req.body);
    if (newUser) {
      res.redirect('/views');
    } else {
      res.redirect('/views/error-register');
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userDao.loginUser(req, { email, password });
    if (user) {
      res.redirect('/products');
    } else {
      res.redirect('/views/error-login');
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', logoutUserController)

export default router;
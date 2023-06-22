import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/views', (req, res) => {
  const user = req.session.user; // Obtén el usuario de la sesión
  res.render('views', { user }); // Pasa el usuario a la vista
});

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/error-register', (req, res) => {
  res.render('errorRegister')
})

router.get('/error-login', (req, res) => {
  res.render('errorLogin')
})

router.get('/profile', (req, res) => {
  const user = req.session.user; // Obtén el usuario de la sesión
  res.render('profile', { user }); // Pasa el usuario a la vista
});

export default router
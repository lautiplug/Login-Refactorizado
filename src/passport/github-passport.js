import { Strategy as GithubStrategy } from 'passport-github2'
import passport from 'passport'
import UserDao from '../dao/user.dao.js'
const userDao = new UserDao()

const strategyOptions = {
  clientID: 'Iv1.88627273aa434298',
  clientSecret: 'fb0e55b9415a90cc935b26b2f8ec24d6a05e7cfb',
  callbackURL: 'http://localhost:8080/users/profile-github',
  scope: ['user:email']
};

const registerOrLogin = async (accesToken, refresToken, profile, done) => {
  console.log('profile:::', profile);
  const email = profile.email !== null ? profile._json.email : profile._json.blog
  const user = await userDao.getByEmail(email)
  if (user) return done(null, user)
  const newUser = await userDao.createUser({
    first_name: profile._json.name.split(' ')[0],
    last_name: profile._json.name.split(' ')[1],
    email,
    password: ' ',
    isGithub: true
  });
  return done(null, newUser)
}

passport.use('github', new GithubStrategy(strategyOptions, registerOrLogin))
import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import UserDao from "../dao/user.dao.js";
const userDao = new UserDao();

const strategyOptions = {
  clientID: "Iv1.88627273aa434298",
  clientSecret: "fb0e55b9415a90cc935b26b2f8ec24d6a05e7cfb",
  callbackURL: "http://localhost:8080/users/profile-github",
  scope: ["user:email"],
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  console.log("profile:::", profile);
  const email =
    profile.email !== null ? profile._json.email : profile._json.blog;

  let firstName = "";
  let lastName = "";

  // Revisa si el campo "name" está vacio
  if (profile._json.name && profile._json.name.includes(" ")) {
    const [namePart1, namePart2] = profile._json.name.split(" ");
    firstName = namePart1;
    lastName = namePart2;
  } else if (profile._json.name) {
    firstName = profile._json.name;
  }

  // Si viene vacío se le asigna un nombre por default
  if (!firstName) {
    firstName = "Coderhouse's";
  }
  if (!lastName) {
    lastName = "User";
  }

  const user = await userDao.getByEmail(email);
  if (user) return done(null, user);

  const newUser = await userDao.createUser({
    first_name: firstName,
    last_name: lastName,
    email,
    password: " ",
    isGithub: true,
  });
  return done(null, newUser);
};

passport.use("github", new GithubStrategy(strategyOptions, registerOrLogin));

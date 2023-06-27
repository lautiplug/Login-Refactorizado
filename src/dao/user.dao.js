import { userModel } from "./models/user.model.js";

export default class UserDao {
  async createUser(user) {
    try {
      const { email } = user

      const userExist = await userModel.find({ email })
      if (userExist.length == 0) {
        if (email == 'adminCoder@coder.com') {
          const newUser = await userModel.create({ ...user, role: 'admin' })
          return newUser
        } else {
          const newUser = await userModel.create(user)
          return newUser
        }
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
    }
  }

  async loginUser(req, user) {
    try {
      const { email, password } = user;
      const userExists = await userModel.findOne({ email, password });
      if (userExists) {
        req.session.user = userExists;
        return userExists;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const userExist = await userModel.findById(id)
      if (userExist) {
        return userExist
      } return false
    } catch (error) {
      console.log(error)
    }
  }

  async getByEmail(email) {
    try {
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        return userExist
      } return false
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}


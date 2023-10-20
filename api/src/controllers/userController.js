const { User } = require("../db");

const createUserDB = async (
  name,
  password,
  email,
) => {
  try {
    let newUser = User.create({
      name,
      password,
      email
    });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByName = async (name) => {
  try {
    let user = await User.findOne({
      where: {
        name: name,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUserDB,
  getUserByName,
};

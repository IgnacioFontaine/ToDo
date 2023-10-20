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

const getUsers = async () => {
  try {
    let users = await User.findAll({});
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser= async ( id, name,password, email) => {

        const [updatedCount, updatedRows] = await Task.update(
            { name: name, password:password ,email: email },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('The id was not found or it is incorrect');
        }

    return { message: "updated information" };
};

module.exports = {
  createUserDB,
  getUserByName,
  getUsers,
  updateUser
};

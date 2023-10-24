//Router de Cate
const { Router } = require("express");
const {
  getUserByName,
  createUserDB,
  getUsers
} = require("../controllers/userController");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let user;
    if (name) {
      user = await getUserByName(name);
    }

    if (!name) {
      user = await getUsers()
    }
    //Si no se manda un nombre, buscar todos
    
    if (user === null) {
      return res.status(200).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//Crear Usuario
router.post("/", async (req, res) => {
  try {
    const { name, password, email } = req.body;

    //Crearlo
    const newUser = await createUserDB(
      name,
      password,
      email,
    );

    //Retornarlo
    res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;

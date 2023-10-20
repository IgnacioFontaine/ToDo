const { Router } = require("express");

const usersRouter = require("./usersRouter.js");
const taskRouter = require("./patrulleroRouter.js")

//Ruter:
const router = Router();

// Configurar los routers
router.use("/users", usersRouter);
router.use("/task", taskRouter);

module.exports = router;
const { Router } = require("express");

const userRouter = require("./usersRouter.js");
const taskRouter = require("./taskRouter.js")

//Ruter:
const router = Router();

// Configurar los routers
router.use("/users", userRouter);
router.use("/task", taskRouter);

module.exports = router;
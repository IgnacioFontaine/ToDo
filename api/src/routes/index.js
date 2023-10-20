const { Router } = require("express");

const usersRouter = require("./userRouter.js");
const taskRouter = require("./taskRouter.js")

//Ruter:
const router = Router();

// Configurar los routers
router.use("/users", usersRouter);
router.use("/task", taskRouter);

module.exports = router;
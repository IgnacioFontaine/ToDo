//Router ToDo
const { Router } = require("express");
const {
    createTaskDB,
    getAllTask,
    getTasksByUser,
    deleteTask,
    updateStatusTask,
    updateTask
} = require("../controllers/taskRouter");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
        return res.status(200).send(`Soy la tarea de nombre ${name}`)
    }
    if (!name) {
      return res.status(200).send(`Soy todas las tareas`)
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, status } = req.body;

    //Create
    const newTask = await createTaskDB(
      name,
      status
    );

    //Return
    res.status(200).json(newTask);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
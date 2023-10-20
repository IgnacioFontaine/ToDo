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

router.put("/modify/:id", async (req, res) => {
  const { id } = req.params;
  
    const { name, status  } = req.body;
    try {
        if (!id) return res.status(404).json({ error: 'Id not found' });
        
        const putTask = await updateTask(id, name, status);
        return res.status(200).json(putTask);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.put("/modifyStatus/:id", async (req, res) => {
  const { id } = req.params;
  
    const {  status  } = req.body;
    try {
        if (!id) return res.status(404).json({ error: 'Id not found' });
        
        const putStatusTask = await updateStatusTask(id, status);
        return res.status(200).json(putStatusTask);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.delete("/eliminar/:id",async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "Invalid id" });
    await deleteTask(id);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})
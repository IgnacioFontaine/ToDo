//Router ToDo
const { Router } = require("express");
const {
    createTaskDB,
    getAllTask,
    getTasksByUser,
    deleteTask,
    updateStatusTask,
    updateTask,
    getTasksByStatus
} = require("../controllers/taskController");

const { User } = require("../db")

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { user } = req.params;
    if (user) {
      tareas_user = await getTasksByUser(user)
      
      return res.status(200).json(tareas_user);
        
    }
    if (!user) {
      tareas = await getAllTask()
      return res.status(200).json(tareas)
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/on/:user", async (req, res) => {
  try {
    
      const { user } = req.params;
      task_by_status = await getTasksByStatus(user, "ON");

      return res.status(200).json(task_by_status);

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/off/:user", async (req, res) => {
  try {
    const { user } = req.params;
    const task_by_status = await getTasksByStatus(user,"OFF");

    return res.status(200).json(task_by_status);

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, status, user  } = req.body;

    //Create
    const newTask = await createTaskDB(
      name,
      status,
      user 
    );

    return res.status(200).json(newTask);
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

    try {
        if (!id) return res.status(404).json({ error: 'Id not found' });
        
        const putStatusTask = await updateStatusTask(id);
        return res.status(200).json(putStatusTask);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.delete("/delete/:id",async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "Invalid id" });
    await deleteTask(id);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})

module.exports = router;
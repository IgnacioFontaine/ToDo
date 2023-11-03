const { Task } = require("../db")

const createTaskDB = async (
  name,
  status,
  user
) => {
  try {
    let newTask = Task.create({
      name,
      status,
      user
    });
    return newTask;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllTask = async () => {
  try {
    let task = await Task.findAll({});
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByUser = async (user) => {
  try {
    let tasks = await Task.findAll({
      where: {
        user: user,
      },
    });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByUserOn = async (user) => {
  try {
    let tasks = await Task.findAll({
      where: {
        user: user,
        status:"ON"
      },
    });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByUserOff = async (user) => {
  try {
    let tasks = await Task.findAll({
      where: {
        user: user,
        status:"OFF"
      },
    });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByStatus = async (user,status) => {
  try {
    let tasks = await Task.findAll({
      where: {
        user:user,
        status: status,
      },
    });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTask = async (id) => {

    const findTask = await Task.findOne({ where: { id } });
    
    if (!findTask) throw error("Providen id not found");

    await findTask.destroy();
    return {message: "Delete success"}
};

const updateTask = async ( id, name, status) => {

        const [updatedCount, updatedRows] = await Task.update(
            { name: name,  status: status },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('The id was not found or it is incorrect');
        }

    return { message: "updated information" };
};

const updateStatusTask = async (id) => {

  const task__modif = await Task.findOne({ where: { id } })

  if (!task__modif) {
    throw new Error('The id was not found or it is incorrect');
  }
  
  if (task__modif.status === "ON") {
        const [updatedCount, updatedRows] = await Task.update(
            { status: "OFF" },
            { where: { id } }
        );
          
  }
  if (task__modif.status === "OFF") {
        const [updatedCount, updatedRows] = await Task.update(
            { status: "ON" },
            { where: { id } }
        );
          
  } 

    return { message: "updated information" };
};


module.exports = {
  createTaskDB,
  getAllTask,
  getTasksByUser,
  deleteTask,
  updateStatusTask,
  updateTask,
  getTasksByStatus,
  getTasksByUser,
  getTasksByUserOn,
  getTasksByUserOff
};
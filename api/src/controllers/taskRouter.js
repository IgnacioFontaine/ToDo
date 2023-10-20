const { Task } = require("../db")

const createTaskDB = async (
  name,
  status
) => {
  try {
    let newTask = Task.create({
      name,
      status
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

const getTasksByUser = async (id) => {
  try {
    let tasks = await Task.findAll({
      where: {
        id: id,
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

const updateStatusTask = async (id, status) => {

  if (status === "ON") {
        const [updatedCount, updatedRows] = await Task.update(
            { status: "OFF" },
            { where: { id } }
        );
          
  } else if (status === "OFF") {
        const [updatedCount, updatedRows] = await Task.update(
            { status: "ON" },
            { where: { id } }
        );
          
  } else {
    throw new Error('The id was not found or it is incorrect');
        }

    return { message: "updated information" };
};


module.exports = {
  createTaskDB,
  getAllTask,
  getTasksByUser,
  deleteTask,
  updateStatusTask,
  updateTask
};
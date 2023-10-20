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


module.exports = {
  createTaskDB,
  getAllTask,
  getTasksByUser,
  
};
import axios from "axios";

export const createTask = (task) => async (dispatch) => {
  const newtask = await axios.post("http://localhost:3001/task", task);
  return dispatch({ type: ACTION_TYPES.CREATE_TASK, payload: newtask.data });
};
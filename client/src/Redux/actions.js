import axios from "axios";
import ACTION_TYPES from './actionTypes'

export const createTask = (task) => async (dispatch) => {
  const newtask = await axios.post("http://localhost:3001/task", task);
  return dispatch({ type: ACTION_TYPES.CREATE_TASK, payload: newtask.data });
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/task/delete/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_TASK_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_TASK_FAILURE,
        payload: error.message
      });
    }
  };
};
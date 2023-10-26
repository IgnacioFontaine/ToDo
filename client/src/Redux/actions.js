import axios from "axios";
import ACTION_TYPES from './actionTypes'

export const createUser = (user) => async (dispatch) => {
  const newUser = await axios.post("http://localhost:3001/user", user);
  return dispatch({ type: ACTION_TYPES.CREATE_USER, payload: newUser.data });
};

export const getAllTask = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/task");
    return dispatch({ type: ACTION_TYPES.GET_ALL_TASKS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

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

export const modifyTask = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/task/modify/${id}`, updatedFields);

      dispatch({
        type: ACTION_TYPES.MODIFY_TASK_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.MODIFY_TASK_FAILURE,
        payload: error.message
      });
    }
  };
};

export const modifyStatusTask = (id) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/task/modifyStatus/${id}`);

      dispatch({
        type: ACTION_TYPES.MODIFY_STATUS_TASK_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.MODIFY_STATUS_TASK_FAILURE,
        payload: error.message
      });
    }
  };
};
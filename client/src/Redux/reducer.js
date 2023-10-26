import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  users:[],
  allTasks: [],
  tasksByUser: [],
  onTask_: [],
  offTask_:[],
  
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
      };
    
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
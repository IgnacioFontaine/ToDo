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
    
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
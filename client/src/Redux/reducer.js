//Config initialState
const initialState = {
  tasks: [],
  on_task_: [],
  off_task_:[],
  
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
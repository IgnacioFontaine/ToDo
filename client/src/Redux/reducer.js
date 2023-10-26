import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  users:[],
  all_tasks: [],
  tasks_by_user: [],
  on_task: [],
  off_task:[],
  
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_TASKS:
      return {
        ...state,
        all_tasks: action.payload,
      };
    
    case ACTION_TYPES.MODIFY_TASK_SUCCESS:
      state.all_tasks.forEach((task)=>{
                if(task.id === action.payload.id){
                    task.name = action.payload.name
                    task.status = action.payload.status
                }
            })
        return {
            ...state,
            all_tasks: [...state.all_tasks]
        };
    
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
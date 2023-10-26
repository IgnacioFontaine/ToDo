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
    
    case ACTION_TYPES.GET_TASKS_STATUS_ON:
      return {
        ...state,
        on_task: action.payload,
      };
    
    case ACTION_TYPES.GET_TASKS_STATUS_OFF:
      return {
        ...state,
        off_task: action.payload,
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
    
    case ACTION_TYPES.MODIFY_TASK_FAILURE:
      return state;
    
    case ACTION_TYPES.MODIFY_STATUS_TASK_SUCCESS:
      state.all_tasks.forEach((task)=>{
                if(task.id === action.payload.id){
                    task.status = action.payload.status
                }
            })
        return {
            ...state,
            all_tasks: [...state.all_tasks]
      };
    
    case ACTION_TYPES.MODIFY_STATUS_TASK_FAILURE:
      return state;
    
    
    case ACTION_TYPES.CREATE_TASK:
      if (action.payload.status === 200) {
        return {
          ...state,
          errormsg: {},
        };
      } else {
        return {
          ...state,
          errormsg: action.payload,
        };
      }

    case ACTION_TYPES.DELETE_TASK_SUCCESS:
      return {
        ...state, all_tasks: state.all_tasks.filter(all_tasks => all_tasks.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_TASK_FAILURE:
      return state;
    
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        error: true,
      };
    
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
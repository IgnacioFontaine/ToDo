import { Box } from "@mui/material"
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "../CreateTask/createTask";
import { getTaskUser, setUser } from "../../Redux/actions"
import Tasks from "../Tasks/tasks";
import TasksOff from "../Tasks/tasksOff";
import {
  auth,
  userExists
} from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state) => state?.current_user);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {

        const uid = user.uid;

        const exists = await userExists(uid);
        dispatch(setUser(user));

        if (!exists) {
          navigate("/login");
        } 
      } else {
        navigate("/login");
      }
    });
  }, [dispatch]);

  const Tasks_on = useSelector((state) => state?.on_task);
  const Tasks_off = useSelector((state) => state?.off_task);

  useEffect(() => {
    dispatch(getTaskUser(user));
    
  }, [dispatch, Tasks_on, Tasks_off]);

  const [darkMode, setDarkMode] = useState(false);
  
  function handleChangeLight() {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    return darkMode;
  }
    

    return (
      <Box sx={{ height: "91.5vh", boxShadow: 2, display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", p: 5, bgcolor: darkMode ? "#A5A5A5" : "#494949"}}>
          <Box sx={{ display: "flex",alignContent:"center", alignItems:"center" }} >
            <Box sx={{display: 'flex', mt:5} }>
              <CreateTask />
              <IconButton  sx={{display: 'flex', width: '15%', alignItems: 'center',justifyContent: 'center', bgcolor: 'whitesmoke', borderRadius: 3, p:1 }} onClick={()=>handleChangeLight()} > 
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Box>
          <Box sx={{display:"flex", m:3}}>
              <Box>
                <Tasks tasks={Tasks_on} />
              </Box>
              <Box>
                <TasksOff tasks={Tasks_off} />
              </Box>
            <Box>
            </Box>
          </Box>
        </Box>
    );
  
};

export default Home;
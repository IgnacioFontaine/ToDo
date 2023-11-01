import { Box } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/menu"
import CreateTask from "../CreateTask/createTask";
import { getTaskUser, setUser } from "../../Redux/actions"
import Tasks from "../Tasks/tasks";
import TasksOff from "../Tasks/tasksOff";


const Home = () => {
  const user = useSelector((state) => state?.current_user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTaskUser(user));
    dispatch(setUser(user));

  }, [dispatch,user]);

  const all_task = useSelector((state) => state?.tasks_by_user);
  const Tasks_on = all_task?.filter((task) => task.status === "ON");
  const Tasks_off = all_task?.filter((task) => task.status === "OFF");


  return (
    <Box sx={{ height: "91.5vh", boxShadow: 2, display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", p:5, bgcolor:"#A5A5A5" }}>
      <Box sx={{ display: "flex",alignContent:"center", alignItems:"center" }} >
        <Box><CreateTask /></Box>
        <Box><Menu /></Box>
      </Box>
      <Box sx={{display:"flex", m:3}}>
          <Box>
            <Tasks tasks={Tasks_on} ></Tasks>
          </Box>
          <Box>
            <TasksOff tasks={Tasks_off} ></TasksOff>
          </Box>
        <Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "../CreateTask/createTask";
import { getTaskUser, setUser } from "../../Redux/actions"
import Tasks from "../Tasks/tasks";
import TasksOff from "../Tasks/tasksOff";

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.current_user);
  const Tasks_on = useSelector((state) => state?.on_task);
  const Tasks_off = useSelector((state) => state?.off_task);

  useEffect(() => {
    dispatch(setUser(user));
    dispatch(getTaskUser(user));

  }, [dispatch,user,Tasks_off, Tasks_on]);


  if (!user) {
    <Box>
      <Typography>No existe user</Typography>
    </Box>
  }

  if (user) {
    return (
      <Box sx={{ height: "91.5vh", boxShadow: 2, display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", p:5,bgcolor:"#A5A5A5" }}>
          <Box sx={{ display: "flex",alignContent:"center", alignItems:"center" }} >
            <Box>
              <CreateTask />
            </Box>
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
  }
};

export default Home;
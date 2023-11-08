import { Box, Grid } from "@mui/material"
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "../CreateTask/createTask";
import { getTaskUser, setUser } from "../../Redux/actions"
import Tasks from "../Tasks/tasks";
import TasksOff from "../Tasks/tasksOff";
import { auth, userExists } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import "../Styles/styles"
import {theme} from "../Styles/styles"


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
  }, []);

  const Tasks_on = useSelector((state) => state?.on_task);
  const Tasks_off = useSelector((state) => state?.off_task);

  useEffect(() => {
    dispatch(getTaskUser(user));
    
  }, [Tasks_off, Tasks_on]);

  const [darkMode, setDarkMode] = useState(false);
  
  function handleChangeLight() {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    return darkMode;
  }
  
  const styles = {
    container: {
      height: "91.5vh",
      boxShadow: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 5,
      backgroundColor: darkMode ? "#A5A5A5" : "#494949",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      height: "150vh",
      mt:2
    },
  };
    

   return (
    <Box sx={styles.container}>
      <Box sx={{ display: "flex", alignContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
            [theme.breakpoints.up("tablet")]: {
              flexDirection: "row",
            },
            [theme.breakpoints.up("desktop")]: {
              flexDirection: "row",
            },
          }}
        >
          <CreateTask  />
          <IconButton
            sx={{
              display: "flex",
              width: "15%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: darkMode ? "#A5A5A5" : "#494949",
              borderRadius: 3,
              p: 1,
            }}
            onClick={handleChangeLight}
          >
            {darkMode ? <Brightness7Icon  /> : <Brightness4Icon  />}
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Grid container spacing={0.5}>
          <Grid item>
            <Tasks tasks={Tasks_on} />
          </Grid>
          <Grid item>
            <TasksOff tasks={Tasks_off} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
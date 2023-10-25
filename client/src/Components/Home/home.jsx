import {Box,Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/menu"


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [dispatch]);

  

  return (
    <Box sx={{ height: "150vh", boxShadow: 2 }}>
      <Box>
        <Menu />
      </Box>
      <Box>
        <Typography>Soy el home</Typography>
        <Typography>Cuadro de tareas ONN</Typography>
        <Typography>Cuadro de tareas OFF</Typography>

      </Box> 
    </Box>
  );
};

export default Home;
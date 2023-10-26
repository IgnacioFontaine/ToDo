import {Box,Typography } from "@mui/material"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/menu"
import CreateTask from "../CreateTask/createTask";


const EMPTY_FORM = {
  name:"",
  status: "ON"
};

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
        <CreateTask />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Home;
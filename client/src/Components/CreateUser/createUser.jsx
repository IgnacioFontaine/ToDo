import {Box,Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const CreateUser = () => {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [dispatch]);

  

  return (
    <Box sx={{ height: "150vh", boxShadow: 2 }}>
      <Box>
        <Typography>Soy el Create User</Typography>
        
      </Box> 
    </Box>
  );
};

export default CreateUser;
import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTask, deleteTask  } from "../../Redux/actions"

const EMPTY_FORM = {
  name:"",
  status: "ON",
  grupo:"User1"
};

const CreateTask = () => {
   const dispatch = useDispatch()
  const [formData, setFormData] = useState(EMPTY_FORM);


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
     event.preventDefault();
     dispatch(createTask(formData))
     setFormData(EMPTY_FORM);

  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box >
          <Box padding={1}>
            <TextField
                label="Name"
                variant="outlined"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"

            />
            </Box>
        </Box>
        <Box>
          <Button
            type="submit"
            sx={{
            color: "black",
            bgcolor: "white",
            }}
          >Create</Button>
        </Box>
      </form>
    </Box>        
  )
}

export default CreateTask;
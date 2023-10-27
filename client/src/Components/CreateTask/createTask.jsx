import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../Redux/actions"

const EMPTY_FORM = {
  name:"",
  status: "ON",
  user:"User1"
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
    <Box sx={{bgcolor:"whitesmoke", borderRadius:4, width:"28vw"}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Box ml={2}>
            <Typography variant="h6">New Task: </Typography>
          </Box>
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
          <Box >
          <Button
            type="submit"
            sx={{
            color: "black",
            bgcolor: "white",
            }}
          >Create</Button>
        </Box>
        </Box>
      </form>
    </Box>        
  )
}

export default CreateTask;
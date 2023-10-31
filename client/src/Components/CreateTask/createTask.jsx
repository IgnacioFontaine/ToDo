import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, modifyTask } from "../../Redux/actions"

const EMPTY_FORM = {
  name:"",
  status: "ON",
  user:"User1"
};

const CreateTask = () => {
   const dispatch = useDispatch()
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [button, setButton] = useState("Create")


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (button.value === "Create") {
        dispatch(createTask(formData))
      } else {
        dispatch(modifyTask(formData.id, formData));
        setButton({ value: "Create" });
      }
      setFormData(EMPTY_FORM);

  };

  const handleUpdate = (id, status) => {
    setFormData({
      id: id,
      status:status
    });
    setButton({ value: "Modify" });
  };
  

  return (
    <Box sx={{bgcolor:"whitesmoke", borderRadius:4, width:"35vw", boxShadow:2}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 5, alignItems: "center", textAlign:"center", m:5 }}>
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
import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { Navigate } from "react-router-dom";

const EMPTY_FORM = {
  name:"",
  status:"ON"
};

const CreateTask = () => {

  const [formData, setFormData] = useState(EMPTY_FORM);


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  async function handleSubmit(event) {
    event.preventDefault();

  }

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
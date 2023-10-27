import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { Navigate } from "react-router-dom";

const EMPTY_FORM = {
  name:"",
  email: "",
  contraseña:""
};

const Login = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errorResponse, setErrorResponse] = useState("")
  const [estaAutenticado,setEstaAutenticado] = useState(false)


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  async function handleSubmit(event) {
    event.preventDefault();

  }
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#A5A5A5", height: "100vh", width: "100vw", alignContent: "center" }}>
      <Box sx={{ alignContent: "center", alignItems: "center", boxShadow: 2, m: 20, p: 5, bgcolor: "#E6E6E6", borderRadius: 5 }}>
        <Box >
          <Typography variant="h2" >Register</Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection:"column"}}>
          <form onSubmit={handleSubmit}>
          <Box >
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
            
            <TextField
                label="Email . . ."
                variant="outlined"
                name="email"
                autoComplete= "none"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                name="meaning"
                autoComplete="off"
                value={formData.meaning}
                onChange={handleChange}
                fullWidth
                margin="normal"

              />
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
        </Box>
    </Box>
  );
};

export default Login;
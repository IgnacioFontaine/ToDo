import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { Navigate } from "react-router-dom";

const EMPTY_FORM = {
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
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column", m:2}}>
        <Typography variant="h2" >Login</Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column"}}>
        <form onSubmit={handleSubmit}>
        <Box >
        </Box>
        <Box padding={1}>
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
                label="Contraseña"
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
          >Ingresar</Button>
        </Box>
      </form>
      </Box>
    </Box>
  );
};

export default Login;
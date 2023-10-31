import {Box,Typography, Button } from "@mui/material"
import { GoogleAuthProvider } from "firebase/auth";


const LoginFirebase = () => {

  function handleClick(){
    const googleProvider = new GoogleAuthProvider();
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#A5A5A5", height: "100vh", width: "100vw", alignContent: "center" }}>
      <Box sx={{ alignContent:"center",alignItems:"center" ,boxShadow: 2, m:20, p:5, bgcolor:"#E6E6E6", borderRadius:5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", m:5, borderColor:"black"}}>
        <Typography variant="h2" >Login with Google</Typography>
        </Box>
        <Box>
          <Button onClick={()=>handleClick()}>Google</Button>
        </Box>
      
      </Box>
    </Box>
  );
};

export default LoginFirebase;
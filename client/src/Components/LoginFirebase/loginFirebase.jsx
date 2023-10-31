import {Box,Typography, Button, Icon } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from "react";


const LoginFirebase = () => {

  useEffect(() => {
    
  },[])
  
  async function handleClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWhithGoogle(googleProvider);

    async function signInWhithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error)
      }
    }

  }

  

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#A5A5A5", height: "100vh", width: "100vw", alignContent: "center" }}>
      <Box sx={{ alignContent:"center",alignItems:"center" ,boxShadow: 2, m:20, p:5, bgcolor:"#E6E6E6", borderRadius:5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", m: 5, borderColor: "black" }}>
          <Box>
            <Typography variant="h2" >To Do App</Typography>
          </Box>
          <Box>
            <Icon>
              <PersonIcon />
            </Icon>
           <Typography variant="h3" >Login with Google</Typography>
          </Box>
        </Box>
        <Box >
          <Button onClick={()=>handleClick()}>Google</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFirebase;
import {Box,Typography, Button} from "@mui/material"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, userExist } from "../Firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginFirebase = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentState] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, handleUserStateChanged)
  }, [])
  
  async function handleUserStateChanged(user) {
    if (user) {
      
      const isRegisted = await userExist(user.uid);
      if (isRegisted) {
        setCurrentUser(user);
      }

    } else {
      console.log("Nadie autenticado")
    }
  }
  
  async function handleClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWhithGoogle(googleProvider);

    async function signInWhithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        navigate("/");
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
          <Box >
            <Box>
              <Typography variant="h3" >Login with Google</Typography>
            </Box>
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
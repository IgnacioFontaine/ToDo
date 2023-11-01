import {Box,Typography, Button, Icon, TextField} from "@mui/material"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import {
  auth,
  getUserInfo,
  read,
  registerNewUser,
  userExists,
} from "../Firebase/firebase";

const EMPTY_FORM = {
  email: "",
  contraseña:""
};

const LoginFirebase = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
  const [state, setState] = useState(0);

  const [formData, setFormData] = useState(EMPTY_FORM);


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  async function handleSubmit(event) {
    event.preventDefault();

  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);

        if (userExists(user.uid)) {
          console.log("user registered");

          const loggedUser = await getUserInfo(uid);
          console.log("loggedUser", loggedUser);
          setCurrentUser(loggedUser);

        } else {
          console.log("Register");

          registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            email:user.email
          });
          const user_register = 
          console.log("registrado!");
          setState(3);
        }
      } else {
        navigate("/login");
      }
    });
  }, []);
  
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
            <Typography variant="h1" >To Do App</Typography>
          </Box>
          <Box >
            <Box>
              <Typography variant="h2" >Login</Typography>
            </Box>
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
        <Box >
          <Box>
            <Typography variant="h3">Or Login with:</Typography>
          </Box>
          <Icon>
            <GoogleIcon sx={{cursor:"pointer"}} onClick={()=>handleClick()} />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFirebase;
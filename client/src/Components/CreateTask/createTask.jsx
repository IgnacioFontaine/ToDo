import { Box , TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../Redux/actions"
import { useSelector } from "react-redux/es/hooks/useSelector";
import Menu from "../Menu/menu"


const CreateTask = ({darkMode}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state?.current_user)

  const [formData, setFormData] = useState({
  name:"",
  status: "ON",
  user: currentUser.uid
  });


  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTask(formData))
    setFormData({
          name:"",
          status: "ON",
          user: currentUser.uid
    })
  };

  return (
    <Box sx={{ bgcolor: darkMode ? "whitesmoke" : "#0F0F0F" , color: darkMode ? "black":"white", borderRadius:4, width:"35vw", boxShadow:2 ,height:"10vh"}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center", textAlign:"center" }}>
          <Box ml={3}>
            <Menu />
          </Box>
          <Box >
            <TextField

                label="New Task"
                variant="outlined"
                name="name"
                autoComplete="none"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                bgcolor: darkMode ? "whitesmoke" : "#0F0F0F",
                color: darkMode ? "black" : "#FFFFFF"
              }}
              
            />
          </Box>
          <Box >
          <Button
            type="submit"
            sx={{
                bgcolor: darkMode ? "whitesmoke" : "#0F0F0F",
                color: darkMode ? "black" : "#FFFFFF"
              }}
          >Create</Button>
          </Box>
        </Box>
      </form>
    </Box>        
  )
}

export default CreateTask;
import { Box , TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../Redux/actions"
import { useSelector } from "react-redux/es/hooks/useSelector";
import Menu from "../Menu/menu"



const CreateTask = () => {
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
    <Box sx={{bgcolor:"whitesmoke", borderRadius:4, width:"35vw", boxShadow:2}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 5, alignItems: "center", textAlign:"center", m:5 }}>
          <Box ml={2}>
            <Menu />
          </Box>
          <Box padding={1}>
            <TextField

                label="New Task"
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
            bgcolor: "#B3FFB4",
              }}
          >Create</Button>
        </Box>
        </Box>
      </form>
    </Box>        
  )
}

export default CreateTask;
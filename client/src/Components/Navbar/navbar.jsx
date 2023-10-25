import {Box,Typography} from "@mui/material"
import Menu from "../Menu/menu";
const NavBar = () => {
  return (
    <Box display={"flex"} sx={{ width: "75vw", justifyContent:"center", alignItems:"center", gap:5, mb:2, mt:0 }} >
      <Box sx={{display:"flex", height:3, textAlign:"center", alignContent:"end"}}>
        <Menu />
    </Box>
  </Box> 
  )
}

export default NavBar;
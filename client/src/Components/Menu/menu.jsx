import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import { logout } from "../Firebase/firebase";


export default function FadeMenu() {

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
    return (
      <Box sx={{display:"flex", alignContent:"flex-start", bgcolor:"whitesmoke", borderRadius:4, width:"3.5vw",height:"10vh", boxShadow:2}}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
          <MenuItem ><PersonIcon /></MenuItem>
          <MenuItem >UserName</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
    </Box>
    )
  }
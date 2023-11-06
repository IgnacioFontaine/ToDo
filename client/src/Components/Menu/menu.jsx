import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { logout } from "../Firebase/firebase";


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const name_user = useSelector((state)=>state?.current_user.displayName)
  
  
    return (
      <Box sx={{display:"flex", alignContent:"flex-start"}}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"gray"}}
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
          <MenuItem ><PersonIcon />   {name_user}</MenuItem>
          <MenuItem onClick={() =>  logout()}>Logout</MenuItem>
      </Menu>
    </Box>
    )
  }
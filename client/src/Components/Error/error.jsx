import { Box, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Error = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ height: "150vh", boxShadow: 2 }}>
      <Box>
        <Box>
          <Typography variant="h2">Error 404</Typography>

        </Box>
        <Box>
          <Typography variant="h4">Return to home</Typography>
          <Button onClick={()=>navigate("/")}>Home</Button>
          
        </Box>
      </Box> 
    </Box>
  );
};

export default Error;
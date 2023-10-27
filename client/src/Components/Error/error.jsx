import { Box, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Error = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#A5A5A5", height: "100vh", width: "100vw", alignContent: "center" }}>
      <Box sx={{ height: "35vh", width: "35vw", alignContent: "center", alignItems: "center", boxShadow: 2, m: 20, p: 5, bgcolor: "#E6E6E6", borderRadius: 5 }}>
        <Box sx={{p:10}}>
        <Box>
          <Typography variant="h2">Error 404</Typography>
        </Box>
        <Box>
          <Typography variant="h4">Return to home</Typography>
          <Button onClick={()=>navigate("/")}>Home</Button>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Error;
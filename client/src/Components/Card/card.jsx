import { Box, Typography, Card, CardContent } from "@mui/material"

const MuiCard = ({task}) => {
  const { id,name,status } = task;
  return (
    <Box height={"150px"}>
      <Card key={id && id}>
        <CardContent>
          <Box>
            <Typography>{name && name}</Typography>
          
        </Box>
        <Box >
          <Typography >{status && status}</Typography>
        </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MuiCard;
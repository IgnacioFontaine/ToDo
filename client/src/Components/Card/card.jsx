import { Box, Typography, Card, CardContent } from "@mui/material"

const MuiCard = ({group}) => {
  const { id,name,status } = group;
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
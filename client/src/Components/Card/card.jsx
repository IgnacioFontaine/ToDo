import { Box, Typography, Card, CardContent, Icon } from "@mui/material"


const MuiCard = ({task}) => {
  const { id,name,status } = task;
  return (
    <Box height={"150px"}>
      <Card key={id && id}>
        <CardContent>
          <Box>
            <Icon>
            </Icon>
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
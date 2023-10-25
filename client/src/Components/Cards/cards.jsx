import Card from "../Card/card";
import { Box } from "@mui/material"

const Cards = ( tasks ) => {
  const listTasks = tasks;
  return (
    <Box>
      {listTasks &&
        listTasks.map((task) => <Card group={task} key={task.id} />)}
    </Box>
  );
};

export default Cards;
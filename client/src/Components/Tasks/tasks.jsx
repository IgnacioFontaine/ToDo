import { Box, Typography, TableHead } from "@mui/material"
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useDispatch} from "react-redux";
import { deleteTask, modifyStatusTask } from "../../Redux/actions"

const Tasks = ({ tasks }, darkMode) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id));

  };

  const handleUpdateStatus = (id) => {
    dispatch(modifyStatusTask(id));
    
  }

  return (
      <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", p:2, backgroundColor:"#B3FFB4", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:2}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color: "black"}}>
                <Typography variant="h4" sx={{m:1}} >Task On:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {tasks[0] ? tasks.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer", display:"flex", gap:1 }}>
                        <Box>
                          <Icon>
                          <CheckBoxOutlineBlankIcon onClick={() => handleUpdateStatus(row?.id)} ></CheckBoxOutlineBlankIcon> 
                        </Icon>
                        </Box>

                        <Box>
                          <Box>
                            <Icon>
                              <DeleteForeverRoundedIcon
                                onClick={() => handleDelete(row?.id)}
                              ></DeleteForeverRoundedIcon>
                        </Icon>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow key={1}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>There are no tasks</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{  display:"flex", gap:1 }}>
                        <Box>
                          <Box>
                            <Icon>
                              <ReportGmailerrorredIcon />
                            </Icon>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

  );
};

export default Tasks;
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
import { useDispatch} from "react-redux";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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
          sx={{ height: "60vh",width:"28vw", overflow: "auto", p:2, backgroundColor:"#FD9797", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:2}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color: "black"}}>
                <Typography variant="h4" sx={{m:1}} >Task Off:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {tasks[0] ? tasks.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                   
                  >
                    <Box >{row?.name}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer", display:"flex", gap:1 }}>
                        <Box>
                          <Icon>
                          <CheckBoxIcon onClick={() => handleUpdateStatus(row?.id)} ></CheckBoxIcon> 
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
                      <Box sx={{ display:"flex", gap:1 }}>
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
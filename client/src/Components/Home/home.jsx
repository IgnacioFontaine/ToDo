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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/menu"
import CreateTask from "../CreateTask/createTask";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import {  getAllTask ,getTaskStatusOn,getTaskStatusOff, deleteTask, modifyStatusTask } from "../../Redux/actions"


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTaskStatusOn());
    dispatch(getTaskStatusOff());
    dispatch(getAllTask());

  }, [dispatch]);

  const Tasks_on = useSelector((state) => state?.on_task)
  const Tasks_off = useSelector((state) => state?.off_task)



  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdateStatus = (id) => {
    dispatch(modifyStatusTask(id));

  }


  return (
    <Box sx={{ height: "91.5vh", boxShadow: 2, display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", p:5, bgcolor:"#A5A5A5" }}>
      <Box sx={{ display: "flex",alignContent:"center", alignItems:"center" }} >
        <Box><CreateTask /></Box>
        <Box><Menu /></Box>
      </Box>
      <Box sx={{display:"flex", m:3}}>
        <Box>
          <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", p:2, backgroundColor:"#B3FFB4", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:2}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" sx={{m:1}} >Task On:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {Tasks_on?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.status}</Box>
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </Box>
        <Box>
          <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto",  p:2 , backgroundColor:"#FD9696", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:2}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" sx={{m:1}} >Task Off:</Typography>
              </TableHead>
            <TableBody style={{}} >
              {Tasks_off?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.status}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer", display: "flex", gap:1 }}>
                        
                        <Box>
                          <Icon>
                          <CheckBoxIcon onClick={() => handleUpdateStatus(row?.id)} ></CheckBoxIcon> 
                        </Icon>
                        </Box>

                        <Box>
                          <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                        </Box>

                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
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
      <Box  >
        <Menu />
      </Box>
      <Box>
        <CreateTask />
      </Box>
      <Box sx={{display:"flex", m:2}}>
        <Box>
          <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1,pt:1, backgroundColor:"#B3FFB4", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Task On:</Typography>
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
        <Box>
          <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1,pt:1, backgroundColor:"#FD9696", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "6vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Task Off:</Typography>
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
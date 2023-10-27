import { Box, Typography, TableHead, Switch, Checkbox } from "@mui/material"
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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu/menu"
import CreateTask from "../CreateTask/createTask";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {  getTaskStatusOn,getTaskStatusOff, deleteTask, modifyStatusTask, modifyTask  } from "../../Redux/actions"


const EMPTY_FORM = {
  name:"",
  status: "ON"
};

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTaskStatusOn());
    dispatch(getTaskStatusOff());
    

  }, []);

  const [formData, setFormData] = useState(EMPTY_FORM);

  //   const handleUpdate = (id, name, status) => {
  //   setFormData({
  //     id: id,
  //     name: name,
  //     status:status
  //   });
  //   setButton({ value: "Modificar" });
  // };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    setFormData(EMPTY_FORM);
  };

  const handleUpdateStatus = (id) => {
    dispatch(modifyStatusTask(id));

  }
  

  const Tasks_on = useSelector((state) => state?.on_task)
  const Tasks_off = useSelector((state)=>state?.off_task)

  return (
    <Box sx={{ height: "150vh", boxShadow: 2, display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center", p:5, }}>
      <Box>
        <Menu />
      </Box>
      <Box>
        <CreateTask />
      </Box>
      <Box sx={{display:"flex"}}>
        <Box>
          <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1,pt:1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Task:</Typography>
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
                      <Box sx={{ cursor: "pointer", display:"flex" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                        <Icon>
                          <CheckBoxOutlineBlankIcon onClick={() => handleUpdateStatus(row?.id)} />
                        </Icon>
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
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1,pt:1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Task:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {Tasks_off?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.status}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer", display:"flex" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                        <Icon>
                          <CheckBoxIcon onClick={() => handleUpdateStatus(row?.id)} />
                        </Icon>
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
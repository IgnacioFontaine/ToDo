import { Box, Typography } from "@mui/material"
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
import { createTask, getAllTask, deleteTask, modifyStatusTask, modifyTask  } from "../../Redux/actions"


const EMPTY_FORM = {
  name:"",
  status: "ON"
};

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTask()) 

  }, [dispatch]);


  const [formData, setFormData] = useState(EMPTY_FORM);

  
  
   const handleSubmit = (event) => {
     event.preventDefault();
     dispatch(createTask(formData))
     setFormData(EMPTY_FORM);

  };

  //   const handleUpdate = (id, name, grupo) => {
  //   setFormData({
  //     id: id,
  //     name: name,
  //     grupo:grupo
  //   });
  //   setButton({ value: "Modificar" });
  // };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    setFormData(EMPTY_FORM);
  };

  const Task = useSelector((state)=>state?.all_tasks)

  return (
    <Box sx={{ height: "150vh", boxShadow: 2 }}>
      <Box>
        <Menu />
      </Box>
      <Box>
        <CreateTask />
      </Box>
      <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Patrulleros:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {Tasks?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.grupo}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                      </Box>
                      <Box>
                        <Icon sx={{cursor:'pointer'}}>
                          <EditRoundedIcon
                            // onClick={() => 
                            //   handleUpdate(
                            //     row?.id,
                            //     row?.name,
                            //     row?.cuotas,
                            //     row?.grupo
                            //   )
                            // }
                          ></EditRoundedIcon>
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
  );
};

export default Home;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskUser, setUser } from "../../Redux/actions"
import { auth } from "../Firebase/firebase"
import Home from "../Home/home";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material"

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state?.current_user);

  useEffect(() => {
    dispatch(getTaskUser(user));
    dispatch(setUser(user));

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log("No user logged in");
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [dispatch, user, navigate]);

  if (!user) {
    navigate("/login");
    return (
      <Box>
        {navigate("/login")}
      </Box>
      )
  }

  return (
      <Home />
  );
};

export default PrivateRoute;
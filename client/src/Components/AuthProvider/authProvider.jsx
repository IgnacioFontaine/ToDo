import { useEffect, useState } from "react";
import {
  auth,
  getUserInfo,
  userExists,
  registerNewUser,
} from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const exists = await userExists(user.uid);

        if (exists) {
          const loggedUser = await getUserInfo(uid);

          if (!loggedUser.processCompleted) {
            console.log("Falta username");
            navigate("/choose-username");
          } else {
            console.log("Usuario logueado completo");
            onUserLoggedIn(loggedUser);
          }
        } else {
          
          navigate("/");
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, []);

  return <Box>{children}</Box>;
}
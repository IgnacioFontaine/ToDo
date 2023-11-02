import { useEffect } from "react";
import {
  auth,
  userExists
} from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthProvider({
  children,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const exists = await userExists(uid);

        if (exists) {
          navigate("/");
        } else {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return <Box>{children}</Box>;
}
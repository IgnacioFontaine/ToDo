import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getTaskUser, setUser } from "../../Redux/actions"
import Tasks from "../Tasks/tasks";
import TasksOff from "../Tasks/tasksOff";
import { auth } from "../../firebase/firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.current_user);

  useEffect(() => {
    dispatch(getTaskUser(user));
    dispatch(setUser(user));

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log("No user logged in");
      }
    });

    return unsubscribe;
  }, [dispatch, user]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Component {...rest}>
      <Tasks tasks={rest.tasks_on} />
      <TasksOff tasks={rest.tasks_off} />
    </Component>
  );
};

export default PrivateRoute;
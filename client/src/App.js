import './App.css';
import { Route, Routes } from "react-router-dom";
import CreateUser from './Components/CreateUser/createUser';
import Error from './Components/Error/error';
import LoginFirebase from './Components/LoginFirebase/loginFirebase';
import PrivateRoute from './Components/PrivateRouter/privateRouter';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/login" element={<LoginFirebase />} />
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;

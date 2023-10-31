import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import CreateUser from './Components/CreateUser/createUser';
import Error from './Components/Error/error';
import LoginFirebase from './Components/LoginFirebase/loginFirebase';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginFirebase" element={<LoginFirebase />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;

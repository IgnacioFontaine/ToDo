import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/home';
import Login from './Components/Login/login';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ApproveProperty from "./Pages/ApproveProperty";
import AddProperty from "./Pages/AddProperty";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile"

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Login />}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/ApproveProperty" element={< ApproveProperty/>}/>
            <Route path="/AddProperty" element={< AddProperty/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
        </Route>

        </Routes>
        </BrowserRouter>    
    );
}

export default App;
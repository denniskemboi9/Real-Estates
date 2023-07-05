import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddProperty from "./Pages/AddProperty";
import ApprovePropert from "./Pages/ApproveProperty";
import LandingPage from "./Pages/Landingpage";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/AddProperty" element={<AddProperty />}/>
            <Route path="/ApproveProperty" element={<ApprovePropert />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App
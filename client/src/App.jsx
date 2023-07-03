import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Login />}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/AboutUs" element={< AboutUs/>}/>
            <Route path="/ContactUs" element={< ContactUs/>}/>
        </Route>

        </Routes>
        </BrowserRouter>    
    );
}

export default App;
import Layout from "./Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/AdminDashBoard";
import CreateUser from "./pages/Createuser";
const App=()=>{
    return(
        <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="dashboard" element={<DashBoard/>}> 
                <Route path="createuser" element={<CreateUser/>} />
            </Route>
             </Route>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;
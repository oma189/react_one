import TopBar from "./components/topbar/TopBar";

import Write from "./components/write/Write";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import{BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  const user = false;
  return (
  <>
      <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/> } /> 
        
        <Route path="/register" element={ user ? <Home/> : <Register />} />  
        <Route path="/login" element={user ? <Home/> : <Login />} /> 
        <Route path="/write" element={ <Write />} />
        {/* <Route path="/write" element={user ? <Write /> : <Register/>} /> */}
        <Route path="/settings" element={ user ? <Settings /> : <Register/>} /> 
        <Route path="/post/:postId" element={<Single />} /> 
      </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;

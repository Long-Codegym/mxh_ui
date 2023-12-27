import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./component/Layout";
import Home from "./home/Home";
import Chat from "./user/componentChat/Chat";
import LayoutChat from "./layoutChat/LayoutChat";
import HomeChat from "./home/HomeChat";

function App() {
  return (
   <Routes>
       <Route path={"/"} element={<Layout/>}>
           <Route path={""} element={<Home/>}></Route>
           <Route path={"/chats"} element={<HomeChat/>}></Route>
       </Route>
       <Route path={"/chat"} element={<LayoutChat/>}>
           <Route path={""} element={<Chat/>}></Route>\
       </Route>
   </Routes>
  );
}

export default App;

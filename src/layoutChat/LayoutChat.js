import HeaderChat from "./HeaderChat";
import {Outlet} from "react-router";

const LayoutChat = () =>{
    return(
        <>
            <HeaderChat/>
            <Outlet/>
        </>
    )
}
export default LayoutChat;
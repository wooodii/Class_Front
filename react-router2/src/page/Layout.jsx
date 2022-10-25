import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (  
        <div>
            <Navbar />
            <br></br>
            <Outlet /> {/** 주소를 통해 바뀌는 공간 */}
        </div>
    );
}

export default Layout;
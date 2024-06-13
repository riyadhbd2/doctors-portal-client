import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";


const MainFile = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainFile;
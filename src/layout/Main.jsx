import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navigation from "../pages/Shared/Navigation/Navigation";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
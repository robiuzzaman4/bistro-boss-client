import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashbord from "../layout/Dashbord";
import MyCart from "../pages/Dashbord/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/secret",
                element: <PrivetRoute> <Secret></Secret> </PrivetRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: "/dashbord/mycart",
                element: <MyCart></MyCart>
            }
        ]
    }
]);

export default router;
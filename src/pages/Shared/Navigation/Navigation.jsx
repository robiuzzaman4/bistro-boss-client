import { Button, Collapse, IconButton, Navbar, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

const Navigation = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [openNav, setOpenNav] = useState(false);

    const handleLogout = () => {
        userLogout()
        .then(() => {
            console.log("log out");
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/"
                    className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal "
            >
                <NavLink to="/menu"
                    className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
                    Our Menu
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal "
            >
                <NavLink to="/order/salad"
                    className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
                    Order Food
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal "
            >
                <NavLink to="/secret"
                    className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
                    Secret
                </NavLink>
            </Typography>
            {
                user ?
                    <>
                        <Button onClick={handleLogout} color="red" size="sm">Logout</Button>
                    </>
                    : <>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal "
                        >
                            <NavLink to="/login"
                                className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
                                Login
                            </NavLink>
                        </Typography>
                    </>
            }
        </ul>
    );

    return (
        <header className="px-4 fixed top-0 z-50 w-full">
            <Navbar shadow={false} className="bg-black/80 border-none backdrop-blur-0 w-full mx-auto max-w-screen-xl px-4 py-6 rounded-none">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Link to="/" className="font-bold text-xl text-white">
                        Bistro Boss
                    </Link>
                    <div className="hidden lg:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <span>Buy Now</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-xl text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <HiOutlineX/>
                        ) : (
                            <HiMenuAlt4/>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            <span>Buy Now</span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Navigation;
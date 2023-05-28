import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartIcon,
  WalletIcon,
  HomeIcon,
  Bars3Icon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashbord = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [cart] = useCart();

  useEffect(() => {
    if (window.innerWidth > 960) {
      setOpen(true);
    }
  }, [])

  return (
    <>
      <Button className="md:hidden" onClick={openDrawer}>Open Drawer</Button>
      <div className="md:ml-[320px] py-10 px-4">
        <Outlet></Outlet>
      </div>
      <Drawer open={open} overlay={false} className="bg-orange-500">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Bistro Boss
          </Typography>
          <IconButton className="md:hidden" variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <List>
          <NavLink to="/dashbord/mycart"
            className={({ isActive }) => isActive ? "text-white" : ""}>
            <ListItem>
              <ListItemPrefix>
                <ShoppingCartIcon className="h-5 w-5" />
              </ListItemPrefix>
              My Cart
              <ListItemSuffix>
                <Chip
                  value={cart.length || 0}
                  size="sm"
                  variant="ghost"
                  color="white"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </NavLink>
          <NavLink to="/dashbord/payment"
            className={({ isActive }) => isActive ? "text-white" : ""}>
            <ListItem>
              <ListItemPrefix>
                <WalletIcon className="h-5 w-5" />
              </ListItemPrefix>
              Payment
            </ListItem>
          </NavLink>

          <hr className="pt-6" />

          <NavLink to="/"
            className={({ isActive }) => isActive ? "text-white" : ""}>
            <ListItem>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </NavLink>
          <NavLink to="/menu"
            className={({ isActive }) => isActive ? "text-white" : ""}>
            <ListItem>
              <ListItemPrefix>
                <Bars3Icon className="h-5 w-5" />
              </ListItemPrefix>
              Menu
            </ListItem>
          </NavLink>
          <NavLink to="/order/salad"
            className={({ isActive }) => isActive ? "text-white" : ""}>
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Shop
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </>


  );
};

export default Dashbord;
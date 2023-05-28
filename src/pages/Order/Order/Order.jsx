import { useState } from "react";
import orderCover from "../../../assets/order/order.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drink"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const drinks = menu.filter((item) => item.category === "drinks");
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={"Order Food"} description={"Would you like to try a dish?"}></Cover>

            <div className="py-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="uppercase">
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab menuItems={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menuItems={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menuItems={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menuItems={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menuItems={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Order;
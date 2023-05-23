import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Button } from "@material-tailwind/react";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter((item) => item.category === "popular");
                setMenu(popularItems);
            })
    }, [])
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 grid gap-8">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
                ></SectionTitle>

            <div className="grid lg:grid-cols-2 gap-8">
                {
                    menu.map((item) => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <Button className="text-center w-fit mx-auto" color="orange">View Full Menu</Button>
        </section>
    );
};

export default PopularMenu;
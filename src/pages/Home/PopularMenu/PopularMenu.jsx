import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Button } from "@material-tailwind/react";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter((item) => item.category === "popular");
    
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 grid gap-8">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
                ></SectionTitle>

            <div className="grid lg:grid-cols-2 gap-8">
                {
                    popular.map((item) => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <Button className="text-center w-fit mx-auto" color="orange">View Full Menu</Button>
        </section>
    );
};

export default PopularMenu;
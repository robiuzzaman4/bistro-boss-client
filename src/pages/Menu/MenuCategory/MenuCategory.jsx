import { Button } from "@material-tailwind/react";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, description }) => {
    return (
        <div className="grid gap-8">
            {
                title && <Cover img={img} title={title} description={description}></Cover>
            }

            <div className="grid lg:grid-cols-2 gap-8">
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            {
                title && <Link to={`/order/${title}`} className="w-auto mx-auto">
                    <Button color="blue-gray" >Order Now</Button>
                </Link>

            }
        </div>
    );
};

export default MenuCategory;
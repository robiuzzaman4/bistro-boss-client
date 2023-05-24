import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");

    return (
        <div className='max-w-screen-xl mx-auto px-4 py-10'>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={"OUR MENU"}
                description={"Would you like to try a dish?"}></Cover>
            <div className="py-10">
                <SectionTitle
                    heading={"TODAY'S OFFER"}
                    subHeading={"---Don't miss---"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            <div className="py-10">
            <h1 className='uppercase text-center py-4 font-medium'>Order Your Favourite Food</h1>
                <MenuCategory 
                items={dessert} 
                img={dessertImg} 
                title={"dessert"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>
            <div className="py-10">
            <h1 className='uppercase text-center py-4 font-medium'>Order Your Favourite Food</h1>
                <MenuCategory 
                items={pizza} 
                img={pizzaImg} 
                title={"pizza"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>
            <div className="py-10">
            <h1 className='uppercase text-center py-4 font-medium'>Order Your Favourite Food</h1>
                <MenuCategory 
                items={salad} 
                img={saladImg} 
                title={"salad"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>
            <div className="py-10">
            <h1 className='uppercase text-center py-4 font-medium'>Order Your Favourite Food</h1>
                <MenuCategory 
                items={soup} 
                img={soupImg} 
                title={"soup"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;
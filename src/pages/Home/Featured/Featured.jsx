import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import { Button } from "@material-tailwind/react";

const Featured = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 bg-featured text-white bg-fixed">
            <div>
                <SectionTitle
                    heading={"FEATURED ITEM"}
                    subHeading={"---Check it out---"}></SectionTitle>
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-8">
                    <div>
                        <img className="w-full" src={img} alt="" />
                    </div>
                    <div>
                        <p className="text-xl">March 20, 2023</p>
                        <p className="text-xl">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Button variant="outlined">Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
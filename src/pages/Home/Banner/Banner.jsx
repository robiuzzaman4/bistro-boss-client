import { Carousel } from "@material-tailwind/react";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 pt-20">
            <Carousel className="" autoplay={true}>
                <img
                    src={img1}
                    alt="image 1"
                    className="max-h-[500px] w-full object-cover"
                />
                <img
                    src={img2}
                    alt="image 2"
                    className="max-h-[500px] w-full object-cover"
                />
                <img
                    src={img3}
                    className="max-h-[500px] w-full object-cover"
                />
                <img
                    src={img4}
                    alt="image 1"
                    className="max-h-[500px] w-full object-cover"
                />
                <img
                    src={img5}
                    alt="image 2"
                    className="max-h-[500px] w-full object-cover"
                />
                <img
                    src={img6}
                    className="max-h-[500px] w-full object-cover"
                />
            </Carousel>
        </section>
    );
};

export default Banner;
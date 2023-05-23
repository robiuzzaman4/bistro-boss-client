import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <SectionTitle 
            heading={"ORDER ONLINE"}
            subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className="text-3xl uppercase text-center text-white -mt-10">Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className="text-3xl uppercase text-center text-white -mt-10">Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className="text-3xl uppercase text-center text-white -mt-10">Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className="text-3xl uppercase text-center text-white -mt-20">Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className="text-3xl uppercase text-center text-white -mt-10">Cake</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
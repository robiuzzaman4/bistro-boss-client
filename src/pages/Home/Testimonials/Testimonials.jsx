import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";
import { Rating } from "@material-tailwind/react";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setRreviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setRreviews(data))
    }, []);
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"---What Our Clients Say---"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper px-4">

                {
                    reviews.map((review) => <SwiperSlide
                        key={review._id}>
                        <div className="grid gap-2">
                            <Rating
                                style={{ maxWidth: 180, margin: "auto" }}
                                value={review.rating}
                                readonly
                            />
                            <p className="text-center md:px-20 lg:px-40">{review.details}</p>
                            <h3 className="text-2xl text-center text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
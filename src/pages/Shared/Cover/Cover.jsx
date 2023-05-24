import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="h-[500px] grid place-items-center max-w-screen-xl mx-auto px-4 py-10">
                <div className="w-[80%] md:w-[60%] bg-black/50 text-white px-4 py-8 grid gap-4">
                    <h1 className="text-center text-5xl uppercase">{title}</h1>
                    <p className="text-center">{description}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;
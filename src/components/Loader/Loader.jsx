import { Spinner } from "@material-tailwind/react";

const Loader = () => {
    return (
        <div className="min-h-screen bg-white z-50 grid place-items-center">
            <Spinner color="orange"></Spinner>
        </div>
    );
};

export default Loader;
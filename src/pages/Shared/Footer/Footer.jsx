import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="text-white max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 px-4 bg-[#1F2937]">
                <div className="">
                    <div className="py-10 grid gap-2">
                        <h1 className="text-xl">Contact Us</h1>
                        <p className="text-gray-300">123 ABS Street, Uni 21, Bangladesh</p>
                        <p className="text-gray-300">+88123456789</p>
                        <p className="text-gray-300">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-gray-300">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="">
                    <div className="py-10 grid gap-2">
                        <h1 className="text-xl">Follow Us</h1>
                        <div className="flex items-center gap-4 text-xl text-gray-300">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] p-4">
                <p className="text-center text-sm">Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
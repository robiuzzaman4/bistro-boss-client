import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [captcha, setCaptcha] = useState("");
    const [disable, setDisable] = useState(true);
    const { userLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                console.log("user on login page: ", user);
                Swal.fire({
                    title: 'Login Successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const handleValidateCaptcha = () => {
        // const captcha = captchaRef.current.value;
        console.log(captcha);
        if (validateCaptcha(captcha)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <section className="max-w-screen-xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
                <div className="">
                    <Card color="transparent" className="p-4">
                        <Typography variant="h4" color="blue-gray">
                            Login
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to login.
                        </Typography>
                        <form onSubmit={handleLogin} className="mt-8 mb-2 w-full">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input name="email" type="email" color="orange" size="lg" label="Email" required />
                                <Input name="password" type="password" color="orange" size="lg" label="Password" required />
                                <div>
                                    <LoadCanvasTemplate />
                                </div>
                                <Input name="captcha" type="text" color="orange" size="lg" label="Captcha"
                                    onChange={(e) => setCaptcha(e.target.value)} />
                                <Button onClick={handleValidateCaptcha} size='sm' color='blue-gray' >Validate</Button>
                            </div>
                            <Button disabled={disable} type="submit" color="orange" className="mt-6" fullWidth>
                                Login
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Dont have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                                >
                                    Register
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default Login;
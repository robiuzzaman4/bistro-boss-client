import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userRegister, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        userRegister(data.email, data.password)
        .then((result) => {
            const user = result.user;
            updateUser(user, data.name, data.photoURL)
            .then(() => {
                console.log("updated user profile");
                reset();
            })
            .catch((error) => {
                console.log(error.message);
            })
            console.log("user from register page: ",user);
            Swal.fire({
                title: 'Register Successfull',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate("/login");
        })
        .catch((error) => {
            console.log(error.message);
        })
    };

    return (
        <>
            <Helmet>
                <title>Bistro | Register</title>
            </Helmet>
            <section className="max-w-screen-xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
                <div className="">
                    <Card color="transparent" className="p-4">
                        <Typography variant="h4" color="blue-gray">
                            Register
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to register.
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input name="name" type="text" color="orange" size="lg" label="Name"  {...register("name", { required: true })} />
                                {errors.name && <span className="text-sm text-red-500">Name is required</span>}
                                
                                <Input name="photoURL" type="text" color="orange" size="lg" label="Photo URL"  {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className="text-sm text-red-500">Photo URL is required</span>}

                                <Input name="email" type="email" color="orange" size="lg" label="Email" {...register("email", { required: true })} />
                                {errors.email && <span className="text-sm text-red-500">Email is required</span>}

                                <Input name="password" type="password" color="orange" size="lg" label="Password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%])/
                                })} />
                                {errors.password?.type === "required" && <span className="text-sm text-red-500">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-sm text-red-500">Password should be 6 character</span>}
                                {errors.password?.type === "pattern" && <span className="text-sm text-red-500">Password should one uppercase, one lowercase and one special character</span>}

                            </div>
                            <Button type="submit" color="orange" className="mt-6" fullWidth>
                                Register
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                                >
                                    Login
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default Register;
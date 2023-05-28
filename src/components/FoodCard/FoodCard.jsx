import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            
            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Added this item in the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Please login before add to cart',
            })
            navigate("/login", { state: { from: location }});
        }
}
return (
    <div>
        <Card className="mt-6 relative">
            <div className="absolute -top-2 right-8 z-10">
                <Chip color="orange" value={`$${price}`} />
            </div>
            <CardHeader color="blue-gray" className="relative h-56">
                <img className="h-full w-full" src={image} alt="img" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography>
                    {recipe}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={() => handleAddToCart(item)} color="orange">Add to Cart</Button>
            </CardFooter>
        </Card>
    </div>
);
};

export default FoodCard;
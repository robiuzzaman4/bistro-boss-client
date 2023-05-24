import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from "@material-tailwind/react";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div>
            <Card className="mt-6 relative">
                <div className="absolute -top-2 right-8 z-10">
                    <Chip color="orange" value={`$${price}`}/>
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
                    <Button color="orange">Add to Cart</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default FoodCard;
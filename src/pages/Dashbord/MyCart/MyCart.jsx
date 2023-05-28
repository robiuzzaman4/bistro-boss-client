import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Button, Card, Typography } from "@material-tailwind/react";
import Swal from 'sweetalert2/src/sweetalert2.js'

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const table_head = ["Serial No", "Image", "Item Name", "Item Price", "Action"];

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro | My Cart</title>
            </Helmet>
            <div className="grid gap-8">
                <div className="flex flex-wrap items-center justify-between">
                    <h1 className="text-2xl md:text-3xl"> Total Item: {cart.length}</h1>
                    <h1 className="text-2xl md:text-3xl"> Total Price: ${total}</h1>
                    <Button color="orange" size="sm">Pay</Button>
                </div>
                <div className="overflow-auto">
                    <Card className=" h-full w-full">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {table_head.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index} className="even:bg-blue-gray-50/50">
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <img className="w-10 h-10 rounded-full" src={item.image} alt="" />
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.name}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.price}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Button
                                                onClick={() => handleDelete(item._id)}
                                                color="red" size="sm">
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-4">
            <img className="w-20 h-20 bg-cover object-cover rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="font-semibold text-gray-700">{name}------</h3>
                <p className="text-gray-700 text-sm">{recipe}</p>
            </div>
            <p className="text-orange-500">${price}</p>
        </div>
    );
};

export default MenuItem;
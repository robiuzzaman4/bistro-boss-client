const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="grid gap-2 py-4">
            <p className="text-orange-500 text-center">{subHeading}</p>
            <h1 className="border-y border-gray-300 w-fit mx-auto py-2 px-4 text-3xl text-center font-bold">{heading}</h1>
        </div>
    );
};

export default SectionTitle;
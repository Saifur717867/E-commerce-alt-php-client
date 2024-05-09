

const BestSellCard = ({ item }) => {
    const { title, image, price, description } = item;
    return (
        <div className="mb-6">
            <img className="w-[100px] h-[100px]" src={image} alt="" />
            <h4>{title}</h4>
            <p className="text-xl font-bold text-red-500 mb-2">Price: ${price}</p>
            <hr />
        </div>
    );
};

export default BestSellCard;
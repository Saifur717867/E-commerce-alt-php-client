

const Card = ({ item }) => {
    const { title, image, price, description } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="h-[200px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-justify">{title.slice(0, 20)}</h2>
                    <p className="text-justify">{description.slice(0, 100)}</p>
                    <p className="text-red-500 text-xl font-semibold">Price: ${price}</p>
                    <div className="card-actions flex justify-between">
                        <button className="btn btn-primary">ADD TO CART</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
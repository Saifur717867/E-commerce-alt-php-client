import { Link } from "react-router-dom";


const Card = ({ item }) => {
    const { id, title, image, price, description } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <Link to={`allProducts/${id}`}>
                    <figure><img src={image} alt="Shoes" className="h-[200px]" /></figure>
                </Link>
                <div className="card-body">
                    <Link to={`allProducts/${id}`}>
                        <h2 className="card-title text-justify hover:text-red-500">{title.slice(0, 20)}</h2>
                    </Link>
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
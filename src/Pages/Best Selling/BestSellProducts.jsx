import { useEffect, useState } from "react";
import BestSellCard from "./BestSellCard";

const BestSellProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.slice(0, 4).map((item) => <BestSellCard item={item}></BestSellCard>)
            }
        </div>
    );
};

export default BestSellProducts;
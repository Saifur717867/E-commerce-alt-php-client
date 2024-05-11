import { useEffect, useState } from "react";
import BestSellCard from "./BestSellCard";

const BestSellProducts = ({ item }) => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div>
                {
                    products.slice(0, 4).map((item) => <BestSellCard key={item.id} item={item}></BestSellCard>)
                }
            </div>
        </div>
    );
};

export default BestSellProducts;
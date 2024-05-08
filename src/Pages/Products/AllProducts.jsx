import { useEffect, useState } from "react";
import Card from "./Card";


const AllProducts = () => {

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="my-10 grid grid-cols-4 gap-3">
            {
                products.map((item) => <Card key={item.id} item={item}></Card>)
            }
        </div>
    );
};

export default AllProducts;
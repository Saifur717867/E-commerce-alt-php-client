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
        <div>
            <div className="mt-10 grid grid-cols-4 gap-4">
                {
                    products.map((item) => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="flex justify-center my-10">
                <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
        </div>

    );
};

export default AllProducts;
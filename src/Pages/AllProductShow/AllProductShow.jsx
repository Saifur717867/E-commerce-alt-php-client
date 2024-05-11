import { useEffect, useState } from "react";
import Card from "../Products/Card";
// import Features from "../../Components/Features";

const AllProductShow = ({ title }) => {

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className="w-[80%] mx-auto my-10">
            {/* <Features title="All Products"></Features> */}
            <div>
                <h3>{title}</h3>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4">
                {
                    products.map((item) => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProductShow;
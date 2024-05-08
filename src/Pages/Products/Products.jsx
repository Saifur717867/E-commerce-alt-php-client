import Features from "../../Components/Features";
import Product from "./Product";


const Products = () => {
    return (
        <div className="w-[80%] mx-auto">
            <Features title="Featured Products"></Features>
            <Product></Product>
        </div>
    );
};

export default Products;
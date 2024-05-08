import Features from "../../Components/Features";
import AllProducts from "./AllProducts";
import Product from "./Product";


const Products = () => {
    return (
        <div className="w-[80%] mx-auto">
            <div>
                <Features title="Featured Products"></Features>
                <Product></Product>
            </div>
            <div>
                <Features title="All Products"></Features>
                <AllProducts></AllProducts>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Products;
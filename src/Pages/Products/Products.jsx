import Features from "../../Components/Features";
import BestSell from "../Best Selling/BestSell";
import AllProducts from "./AllProducts";
import Product from "./Product";


const Products = () => {
    return (
        <div className="w-[80%] mx-auto">
            <div className="mt-16">
                <Features title="Featured Products"></Features>
                <Product></Product>
            </div>
            <div className="mt-16">
                <Features title="All Products"></Features>
                <AllProducts></AllProducts>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <BestSell title="Best Selling"></BestSell>
                <BestSell title="Top Rated"></BestSell>
                <BestSell title="New Arrival"></BestSell>
            </div>
        </div>
    );
};

export default Products;
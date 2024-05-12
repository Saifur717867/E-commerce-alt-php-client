import { NavLink } from "react-router-dom";
import Features from "../../Components/Features";
import BestSell from "../Best Selling/BestSell";
import AllProducts from "./AllProducts";
import Product from "./Product";
import BestSellProducts from "../Best Selling/BestSellProducts";


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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div >
                    <div className="flex justify-between items-end">
                        <BestSell title="Best Selling"></BestSell>
                        <NavLink to="/allProducts">
                            <button className="btn btn-outline btn-error mt-3">View All</button>
                        </NavLink>
                    </div>
                    <div className="mt-6">
                        <BestSellProducts></BestSellProducts>
                    </div>
                </div>
                <div >
                    <div className="flex justify-between items-end">
                        <BestSell title="Top Rated"></BestSell>
                        <NavLink to="/allProducts">
                            <button className="btn btn-outline btn-error mt-3">View All</button>
                        </NavLink>
                    </div>
                    <div className="mt-6">
                        <BestSellProducts></BestSellProducts>
                    </div>
                </div>
                <div >
                    <div className="flex justify-between items-end">
                        <BestSell title="New Arrival"></BestSell>
                        <NavLink to="/allProducts">
                            <button className="btn btn-outline btn-error mt-3">View All</button>
                        </NavLink>
                    </div>
                    <div className="mt-6">
                        <BestSellProducts></BestSellProducts>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
import Card from "../Products/Card";
import BestSellProducts from "./BestSellProducts";


const BestSell = ({ title }) => {
    return (
        <div className="mt-20">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-2xl text-red-500">{title}</h3>
                <button className="btn btn-outline btn-error">View All</button>
            </div>
            <div>
                <BestSellProducts></BestSellProducts>
            </div>
        </div>
    );
};

export default BestSell;
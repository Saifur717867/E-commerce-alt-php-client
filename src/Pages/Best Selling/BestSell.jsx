import BestSellProducts from "./BestSellProducts";


const BestSell = ({ title }) => {
    return (
        <div className="mt-20">
            <div className="">
                <h3 className="font-semibold text-4xl text-red-500">{title}</h3>
            </div>
        </div>
    );
};

export default BestSell;
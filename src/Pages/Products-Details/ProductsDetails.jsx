import { useLoaderData } from "react-router-dom";


const ProductsDetails = () => {

    const item = useLoaderData();
    const { title, image, price, description } = item;
    let totalDiscount = (price * 45) / 100;
    const netPrice = price - totalDiscount;
    return (
        <div className="w-[80%] mx-auto p-10">
            <div className="flex justify-center gap-10">
                <div className="border border-slate-300 p-6">
                    <img src={image} className="w-[80%] h-auto" alt="product" />
                </div>
                <div className="border border-slate-300 p-6">
                    <h1 className="text-3xl font-semibold mb-6">{title}</h1>
                    <div className="my-6">
                        <p className="text-2xl text-red-500 font-bold">Price: <span className="line-through">${price}</span></p>
                        <p className="text-2xl text-red-500 font-bold">Discount Price: ${netPrice}</p>
                    </div>
                    <div>
                        <button className="btn btn-error px-10">Order Now</button>
                    </div>
                    <div className="border-2 border-dashed border-slate-300 text-center p-10 mt-6">
                        <p className="text-xl font-semibold">Call Me This Number</p>
                        <p className="text-4xl font-semibold text-orange-500">01717583509</p>
                    </div>
                    <div className="border-2 border-dashed border-slate-300 text-center p-10 mt-6">
                        <div className="flex justify-between mb-3">
                            <p>Delivery Cost in Dhaka</p>
                            <p>$ 80.00</p>
                        </div>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p>Delivery Cost Out Side of Dhaka</p>
                            <p>$ 120.00</p>
                        </div>
                        <hr />
                        <div className="mt-3">
                            <p>Bkash Number:- 01700923305</p>
                            <p>Nagod Number:- 01700923305</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
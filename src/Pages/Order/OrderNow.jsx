import OrderDetails from "./OrderDetails";
import OrderForm from "./OrderForm";


const OrderNow = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10 w-[80%] mx-auto my-10">
            <div className="w-full md:w-[50%] border-2 rounded-lg p-6">
                <p className="text-xl">অর্ডারটি কনফার্ম করতে আপনার <span className="text-red-500">নাম, ঠিকানা, মোবাইল নাম্বার,</span> লিখে অর্ডার কনফার্ম করুন বাটনে ক্লিক করুন</p>
                <OrderForm></OrderForm>
            </div>
            <div className="w-full md:w-[50%] border-2 rounded-lg p-6">
                <OrderDetails></OrderDetails>
            </div>
        </div>
    );
};

export default OrderNow;
import OrderForm from "./OrderForm";


const OrderNow = () => {
    return (
        <div className="flex justify-between gap-10 w-[80%] mx-auto my-10">
            <div className="w-[50%]">
                <p>অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে অর্ডার কনফার্ম করুন বাটনে ক্লিক করুন</p>
                <OrderForm></OrderForm>
            </div>
            <div className="w-[50%]">
                <h3>Your Order</h3>
            </div>
        </div>
    );
};

export default OrderNow;
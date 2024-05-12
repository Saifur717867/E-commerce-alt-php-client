import React from "react";
import { useForm } from "react-hook-form"


const OrderForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>আপনার নাম *</label>
                <input className="border-2 rounded-md w-full px-4 py-2" placeholder="আপনার নাম লিখুন" {...register("name")} required />
                <label className="mt-4 flex">আপনার ঠিকানা *</label>
                <input className="border-2 rounded-md w-full px-4 py-2" placeholder="আপনার ঠিকানা লিখুন" {...register("address")} required />
                <label className="mt-4 flex">মোবাইল নম্বর *</label>
                <input className="border-2 rounded-md w-full px-4 py-2" type="tel" placeholder="মোবাইল নম্বর লিখুন" {...register("Mobile number", { required: true, minLength: 11, maxLength: 11 })} />
                <label className="mt-4 flex">ডেলিভারি খরচ *</label>
                <select className="border-2 rounded-md w-full px-4 py-2 mb-4" {...register("cost")}>
                    <option value="120">Out Side of Dhaka - 120</option>
                    <option value="80">In side of Dhaka - 80</option>
                </select>
                <button className="rounded-md w-full px-4 py-2 text-white bg-green-400 hover:bg-green-700" type="submit">Confirm Your Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
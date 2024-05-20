import { FaTrashAlt } from "react-icons/fa";


const AddNewOrder = () => {
    return (
        <div className="flex justify-between gap-6">
            <div className="shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-lg w-full">
                <h3 className="bg-slate-200 rounded-t-lg p-4 text-md font-medium">Customer Info</h3>
                <div className="px-4">
                    <div className="flex justify-between items-center gap-4">
                        <div className="w-full">
                            <label className="mt-4 flex">Store Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                        </div>
                        <div className="w-full">
                            <label className="mt-4 flex">Invoice Number<span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="w-full">
                            <label className="flex">Customer Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                        </div>
                        <div className="w-full">
                            <label className="flex">Customer Phone<span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                        </div>
                    </div>
                    <label className="mb-2 flex">Customer Address<span className="text-red-500">*</span></label>
                    <textarea placeholder="Type Address" className="textarea textarea-bordered rounded-sm textarea-md w-full max-w-full shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" ></textarea>
                    <label className="flex">Courier Name<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                    <label className="flex">City Name<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                    <label className="flex">Zone Name<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                    <label className="flex">Order Date<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" />
                </div>
            </div>
            <div className="shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-lg w-full">
                <h3 className="bg-slate-200 rounded-t-lg p-4 text-md font-medium">Product Info</h3>
                <div className="mt-4 px-4">
                    <table className="w-full text-center">
                        <thead className="">
                            <tr className="border-2">
                                <th className="border-r-2 py-3">Code</th>
                                <th className="border-r-2">Product Name</th>
                                <th className="border-r-2">Quantity</th>
                                <th className="border-r-2">Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className="border-2 text-center">
                                <td className="border-r-2 py-4">SD680</td>
                                <td className="border-r-2">Product Title</td>
                                <td className="border-r-2"><input className="w-[80px] py-2 bg-slate-50 text-center border" type='number' value={1} /></td>
                                <td className="border-r-2">$150</td>
                                <td className="border-r-2"><FaTrashAlt className="text-xl text-red-500" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="p-6 border-2">
                        <select className="select input select-bordered rounded-sm w-full shadow-md shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                            <option>Select A Product</option>
                            <option>On Hold</option>
                            <option>Payment Pending</option>
                            <option>Canceled</option>
                            <option>Completed</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between gap-7 px-4 my-10">
                    <div className="w-6/12">
                        <label className="flex mb-2">Payment<span className="text-red-500">*</span></label>
                        <select className="select input select-bordered rounded-sm w-full shadow-md shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                            <option>Select A Payment Type</option>
                            <option>On Hold</option>
                            <option>Payment Pending</option>
                            <option>Canceled</option>
                            <option>Completed</option>
                        </select>
                        <label className="flex mt-4">Memo Number<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" placeholder="Memo Number" />
                    </div>
                    <div className="w-6/12">
                        <div className="flex justify-end items-center gap-3">
                            <label className="font-medium">Sub Total </label>
                            <input type="text" className="px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" placeholder="0" />
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <label className="font-medium">Delivery</label>
                            <input type="text" className="px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" placeholder="0" />
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <label className="font-medium">Discount</label>
                            <input type="text" className="px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" placeholder="0" />
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <label className="font-medium">Total</label>
                            <input type="text" className="px-2 py-2 mb-4 mt-2 rounded-sm border border-slate-300 shadow-md shadow-slate-900/10 shadow-b-1 -shadow-spread-1" placeholder="0" />
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <button className="btn btn-primary w-full p-2 text-center">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewOrder;
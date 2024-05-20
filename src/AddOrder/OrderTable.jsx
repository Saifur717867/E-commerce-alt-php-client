import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const OrderTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs rounded-lg table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-[40px]">
                            <label>
                                <input type="checkbox" />
                            </label>
                        </th>
                        <th>
                            <input type="text" className="w-[80px] px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" placeholder="Product ID" />
                        </th>
                        <th>
                            <input type="text" className="w-[120px] px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" placeholder="Customer Phone" />
                        </th>
                        <th>Product Name</th>
                        <th>Total</th>
                        <th className="">
                            <select className="select input select-bordered w-[165px]  shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                                <option value={''}>Select A Courier</option>
                                <option>SteadFast</option>
                                <option>SunderBon</option>
                                <option>Continental</option>
                            </select>
                        </th>
                        <th>
                            <input type="date" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" placeholder="Date" />
                        </th>
                        <th className="w-[170px]">Status</th>
                        <th>Notes</th>
                        <th className="w-[160px]">
                            <select className="select input select-bordered py-1 px-2 w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                                <option value={''}>Select A User</option>
                                <option>Staff 01</option>
                                <option>Staff 02</option>
                                <option>Staff 03</option>
                            </select>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" />
                            </label>
                        </th>
                        <td>
                            <p>SD680</p>
                        </td>
                        <td>
                            <p>Customer address and Phone Number</p>
                        </td>
                        <td>
                            <p>Product Title name</p>
                        </td>
                        <td>
                            <p>Product Price(0)</p>
                        </td>
                        <td>
                            <p>Courier Name(SteadFast)</p>
                        </td>
                        <td>
                            <p>15/05/2024</p>
                        </td>
                        <td>
                            <select className="select input select-bordered py-1 px-2 w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                                <option>Processing</option>
                                <option>On Hold</option>
                                <option>Payment Pending</option>
                                <option>Canceled</option>
                                <option>Completed</option>
                            </select>
                        </td>
                        <td>
                            <p>#SD680 Order Has Been Created by My Staff 01</p>
                        </td>
                        <td>
                            <p>Staff 01</p>
                        </td>
                        <td>
                            <FaRegEdit className="mb-2 text-xl text-slate-500" />
                            <FaTrashAlt className="text-xl text-slate-500" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
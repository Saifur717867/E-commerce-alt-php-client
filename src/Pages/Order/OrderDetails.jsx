import { RiDeleteBin5Fill } from "react-icons/ri";

const OrderDetails = () => {
    return (
        <div>
            <h3 className="text-4xl font-semibold">Your Order</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <button>
                                            <RiDeleteBin5Fill className="text-red-500 text-2xl" />
                                        </button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Title</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Price</p>
                                </td>
                                <td>
                                    <div className="flex justify-between items-center border-2 rounded-md">
                                        <button className="btn btn-error text-white rounded-md">+</button>
                                        <p className="mx-4">0</p>
                                        <button className="btn btn-error text-white rounded-md">-</button>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Price</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
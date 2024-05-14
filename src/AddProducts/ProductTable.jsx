import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const ProductTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table border-2 border-slate-200 rounded-lg">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Sale Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>Title</p>
                        </td>
                        <td>
                            <p>Category name</p>
                        </td>
                        <td>
                            <p>SKU</p>
                        </td>
                        <td>
                            <p>200</p>
                        </td>
                        <td>
                            <p>120</p>
                        </td>
                        <td>
                            <button className="btn btn-primary">Active</button>
                        </td>
                        <td>
                            <button className="btn btn-info text-white">
                                <FaRegEdit></FaRegEdit>
                            </button>
                            <button className="btn btn-error text-white ml-2">
                                <FaTrashAlt />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
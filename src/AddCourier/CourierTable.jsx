import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const CourierTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table border-2 border-slate-200 rounded-lg">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>Courier Name</th>
                        <th>City Available</th>
                        <th>Zone Available</th>
                        <th>Courier Charge</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                1
                            </label>
                        </th>
                        <td>
                            <p>Steadfast</p>
                        </td>
                        <td>
                            <p>No Available</p>
                        </td>
                        <td>
                            <p>No Available</p>
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

export default CourierTable;
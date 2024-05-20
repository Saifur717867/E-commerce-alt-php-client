import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const UserTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table border-2 border-slate-200 rounded-lg">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Type</th>
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
                            <p>www.happymart.com</p>
                        </td>
                        <td>
                            <p>01717583509</p>
                        </td>
                        <td>
                            <p>saifur717867@gmail.com</p>
                        </td>
                        <td>
                            <p>Admin</p>
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

export default UserTable;


const ReportCourierTable = () => {
    return (
        <div className="overflow-x-auto mt-10">
            <hr />
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className="bg-slate-200">
                        <th>Date</th>
                        <th>Invoiced ID</th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>Courier</th>
                        <th>User</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>15/07/1985</th>
                        <td>Invoiced Number(146)</td>
                        <td>Customer Name</td>
                        <td>Products Title</td>
                        <td>Price-120</td>
                        <td>Courier Name</td>
                        <td>User Name</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReportCourierTable;
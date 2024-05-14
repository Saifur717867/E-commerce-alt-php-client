

const TodayReport = () => {
    return (
        <div className="border rounded-lg p-6 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2">
            <h3 className="text-xl font-semibold">Today Report</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Today Orders</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Processing</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Payment Pending</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">On Hold</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Canceled</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Completed</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Invoice Pending</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Invoiced</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Stock Out</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Delivered</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Customer Confirm</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Paid</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Returned</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold">Lost</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodayReport;
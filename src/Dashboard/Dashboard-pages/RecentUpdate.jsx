

const RecentUpdate = () => {
    return (
        <div className="border rounded-lg p-6 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2">
            <h3 className="text-xl font-semibold">Recent Up Date</h3>
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
                                <td className="text-md text-slate-700 font-semibold">Name</td>
                                <td>Message</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="text-md text-slate-700 font-semibold"></td>
                                <td>No data available in Table</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecentUpdate;
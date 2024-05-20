

const DeliveredStatus = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 mb-4">
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Delivered</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Customer On Hold</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Customer Confirm</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Request To Return</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Paid</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="font-medium text-slate-400">Return</h5>
            </div>
            <div className=" px-3  py-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="  font-medium text-slate-400">Lost</h5>
            </div>
        </div>
    );
};

export default DeliveredStatus;
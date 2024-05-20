

const OrderStatus = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">All Orders</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Processing</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Payment Pending</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">On Hold</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Canceled</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Completed</h5>
            </div>
        </div>
    );
};

export default OrderStatus;
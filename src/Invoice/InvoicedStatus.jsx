

const InvoicedStatus = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Pending Invoiced</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Invoiced</h5>
            </div>
            <div className="px-6 py-4 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md">
                <p className="text-2xl font-semibold">0</p>
                <h5 className="text-lg font-medium text-slate-400">Stock Out</h5>
            </div>
        </div>
    );
};

export default InvoicedStatus;
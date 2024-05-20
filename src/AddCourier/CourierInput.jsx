

const CourierInput = () => {
    return (
        <div>
            <label className="mt-4 flex">Courier Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-2 mb-2 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Courier Charge<span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-2 mb-2 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <div className="flex justify-start gap-4">
                <input type="checkbox" />
                <label className="mt-2 mb-2 flex">City Available<span className="text-red-500">*</span></label>
            </div>
            <div className="flex justify-start gap-4">
                <input type="checkbox" />
                <label className="mt-2 mb-2 flex">Zone Available<span className="text-red-500">*</span></label>
            </div>


        </div>
    );
};

export default CourierInput;
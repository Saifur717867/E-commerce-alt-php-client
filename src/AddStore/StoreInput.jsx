

const StoreInput = () => {
    return (
        <div>
            <label className="mt-4 flex">Store Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-2 mb-2 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Store Url <span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-2 mb-2 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 mb-2 flex">Store Description<span className="text-red-500">*</span></label>
            <textarea placeholder="Type description" className="textarea textarea-bordered textarea-lg w-full max-w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" ></textarea>
        </div>
    );
};

export default StoreInput;
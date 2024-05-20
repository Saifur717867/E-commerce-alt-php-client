

const UserInput = () => {
    return (
        <div>
            <label className="mt-4 flex">Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-1 mb-2 mt-2 border border-slate-300 rounded-sm shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Phone<span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Email<span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Password<span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Roll<span className="text-red-500">*</span></label>
            <input type="text" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />

        </div>
    );
};

export default UserInput;
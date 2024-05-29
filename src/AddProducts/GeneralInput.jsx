

const GeneralInput = () => {
    return (
        <div>
            <label className="mt-4 flex">Product Name <span className="text-red-500">*</span></label>
            <input type="text" name="title" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" required />
            <label>Product Slug <span className="text-red-500">*</span></label>
            <div className="flex justify-start items-center mb-4 mt-2">
                <button className="bg-slate-200 px-2 py-2 rounded-l-md shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2">//happymart.com/product/</button>
                <input type="text" className="w-full px-2 py-2 rounded-r-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            </div>
            <label className="mt-4 flex">Product Code <span className="text-red-500">*</span></label>
            <input type="text" name="productCode" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" required />
            <label className="mb-2 flex">Categories<span className="text-red-500">*</span></label>
            <select className="select input select-bordered py-1 px-2 w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                <option value={''}>Select A Category</option>
                <option>Home & Kitchen</option>
                <option>Summer Cloth</option>
                <option>Tools & Toys</option>
                <option>Winter Cloths</option>
                <option>Spa Beauty</option>
                <option>Gym Products</option>
            </select>
            <label className="mt-4 mb-2 flex">Product Description<span className="text-red-500">*</span></label>
            <textarea name="description" placeholder="Type description" className="textarea textarea-bordered textarea-lg w-full max-w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" required></textarea>
        </div>
    );
};

export default GeneralInput;
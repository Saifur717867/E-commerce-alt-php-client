import { IoImagesOutline } from "react-icons/io5";

const ImagesInput = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                    <label className="mt-4 flex">Regular Price<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
                </div>
                <div className="w-full">
                    <label className="mt-4 flex">Sale Price<span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
                </div>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                    <label className="mt-4 flex">Feature Image<span className="text-red-500">*</span></label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-2" />
                    <div className="w-[150px] h-[150px] bg-slate-100 rounded-lg relative mt-4 border-8 border-slate-200">
                        <div className="absolute top-[38%] right-[38%] bg-slate-100">
                            <IoImagesOutline className="text-4xl"></IoImagesOutline>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <label className="mt-4 flex">Gallery Image<span className="text-red-500">*</span></label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-2" />
                    <div className="w-[150px] h-[150px] bg-slate-100 rounded-lg relative mt-4 border-8 border-slate-200">
                        <div className="absolute top-[38%] right-[38%] bg-slate-100">
                            <IoImagesOutline className="text-4xl"></IoImagesOutline>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="bg-slate-100 rounded-md py-1 px-4 text-center">
                    <h3 className="uppercase text-lg font-medium">Meta Data</h3>
                </div>
            </div>
            <div>
                <label className="mt-2 flex">Meta Title<span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
                <label className="mt-2 flex">Meta keyword<span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
                <label className="mt-2 mb-2 flex">Meta Description<span className="text-red-500">*</span></label>
                <textarea placeholder="Type description" className="textarea textarea-bordered textarea-lg w-full max-w-full shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" ></textarea>
            </div>
        </div>

    );
};

export default ImagesInput;
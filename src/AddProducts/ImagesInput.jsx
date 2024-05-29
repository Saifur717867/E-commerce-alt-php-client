import { useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const ImagesInput = () => {

    const [files, setFiles] = useState([]);
    const [gallery, setGallery] = useState([]);
    console.log(files);
    console.log(gallery);

    const handleUploadImageFeature = (e) => {
        const upload_image = Array.from(e.target.files);
        console.log(upload_image);
        setFiles((prevState) => [...prevState, ...upload_image])
    }
    const handleUploadImageGallery = (e) => {
        const upload_gallery = Array.from(e.target.files);
        console.log(upload_gallery);
        setGallery((prevState) => [...prevState, ...upload_gallery])
    }
    const handleDeleteImage = (item) => {
        setFiles(files.filter((data) => (data !== item)))
    }
    const handleDeleteGallery = (item) => {
        setGallery(files.filter((data) => (data !== item)))
    }

    return (
        <div>
            <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                    <label className="mt-4 flex">Regular Price<span className="text-red-500">*</span></label>
                    <input type="number" name="price" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" required />
                </div>
                <div className="w-full">
                    <label className="mt-4 flex">Sale Price<span className="text-red-500">*</span></label>
                    <input type="number" name="salePrice" className="w-full px-2 py-2 mb-4 mt-2 rounded-md border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" required />
                </div>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                    <label className="mt-4 flex">Feature Image<span className="text-red-500">*</span></label>
                    <input type="file" name="featureImage" className="file-input file-input-bordered w-full max-w-xs mt-2" onChange={handleUploadImageFeature} />
                    {
                        files.length < 1 && <div className="w-[150px] h-[150px] bg-slate-100 rounded-lg relative mt-4 border-8 border-slate-200">
                            <div className="absolute top-[38%] right-[38%] bg-slate-100">
                                <IoImagesOutline className="text-4xl"></IoImagesOutline>
                            </div>
                        </div>
                    }
                    {
                        files.length > 0 && files.map((item, index) => {
                            const imageUrl = URL.createObjectURL(item);
                            return (
                                <div key={index} className="w-[150px] h-[150px] bg-slate-100 rounded-lg mt-4 border-8 border-slate-200 relative">
                                    <img className="w-full h-full" src={imageUrl} alt="" />
                                    <button onClick={() => handleDeleteImage(item)}>
                                        <IoIosCloseCircle className="text-4xl text-red-500 cursor-pointer absolute top-2 right-2" />
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="w-full">
                    <label className="mt-4 flex">Gallery Image<span className="text-red-500">*</span></label>
                    <input type="file" name="galleryImage" className="file-input file-input-bordered w-full max-w-xs mt-2" onChange={handleUploadImageGallery} />
                    {
                        gallery.length < 1 && <div className="w-[150px] h-[150px] bg-slate-100 rounded-lg relative mt-4 border-8 border-slate-200">
                            <div className="absolute top-[38%] right-[38%] bg-slate-100">
                                <IoImagesOutline className="text-4xl"></IoImagesOutline>
                            </div>
                        </div>
                    }
                    {
                        gallery.length > 0 && gallery.map((item, index) => {
                            const gallery = URL.createObjectURL(item);
                            return (
                                <div key={index} className="w-[150px] h-[150px] bg-slate-100 rounded-lg mt-4 border-8 border-slate-200 relative">
                                    <img className="w-full h-full" src={gallery} alt="" />
                                    <button onClick={() => handleDeleteGallery(item)}>
                                        <IoIosCloseCircle className="text-4xl text-red-500 cursor-pointer absolute top-2 right-2" />
                                    </button>
                                </div>
                            )
                        })
                    }
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
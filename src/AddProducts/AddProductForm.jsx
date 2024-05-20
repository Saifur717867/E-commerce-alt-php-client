import GeneralInput from "./GeneralInput";
import ImagesInput from "./ImagesInput";


const AddProductForm = () => {

    return (
        <div className="overflow-x-auto">
            <h3 className="text-xl font-medium">Add New Product</h3>
            <hr className="mt-4 mb-4" />
            <div className="flex justify-between gap-6">
                <div className="w-full">
                    <div className="bg-slate-100 rounded-md py-1 px-4 text-center">
                        <h3 className="uppercase text-lg font-medium">General </h3>
                    </div>
                    <GeneralInput></GeneralInput>
                </div>
                <div className="w-full">
                    <div className="bg-slate-100 rounded-md py-1 px-4 text-center">
                        <h3 className="uppercase text-lg font-medium">Product Images</h3>
                    </div>
                    <ImagesInput></ImagesInput>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
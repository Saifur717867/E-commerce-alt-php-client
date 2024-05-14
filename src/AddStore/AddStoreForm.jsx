import StoreInput from "./StoreInput";


const AddStoreForm = () => {
    return (
        <div>
            <h3 className="text-xl font-medium">Add New Store</h3>
            <hr className="mt-4 mb-4" />
            <div className="">
                <div className="w-full">
                    <StoreInput></StoreInput>
                </div>
            </div>
        </div>
    );
};

export default AddStoreForm;
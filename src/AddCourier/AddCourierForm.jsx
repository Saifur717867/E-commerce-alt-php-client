import CourierInput from "./CourierInput";


const AddCourierForm = () => {
    return (
        <div>
            <h3 className="text-xl font-medium">Add New Courier</h3>
            <hr className="mt-4 mb-4" />
            <div className="">
                <div className="w-full">
                    <CourierInput></CourierInput>
                </div>
            </div>
        </div>
    );
};

export default AddCourierForm;
import UserInput from "./UserInput";


const AddUserForm = () => {
    return (
        <div>
            <h3 className="text-xl font-medium">Add New User</h3>
            <hr className="mt-4 mb-4" />
            <div className="">
                <div className="w-full">
                    <UserInput></UserInput>
                </div>
            </div>
        </div>
    );
};

export default AddUserForm;
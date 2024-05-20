import { FaPlus } from "react-icons/fa6";
import AddUser from "./AddUser";
import UserTable from "./UserTable";

const User = () => {
    return (
        <div className='shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-lg p-6'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>Total 0 Users</h3>
                <div>
                    <button className='btn btn-primary rounded-md px-4 py-2' onClick={() => document.getElementById('my_modal_4').showModal()}>
                        <FaPlus className="text-2xl text-white"></FaPlus>
                        Add New User</button>
                    <AddUser id={'my_modal_4'}></AddUser>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4">
                <div>
                    <label>Show:</label>
                    <select className="select input select-bordered ml-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                        <option value={'10'}>50</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="">
                    <label>Search:</label>
                    <input type="text" className="shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-md py-1 px-2 ml-2" />
                </div>
            </div>
            <div>
                <UserTable></UserTable>
            </div>
        </div>
    );
};

export default User;
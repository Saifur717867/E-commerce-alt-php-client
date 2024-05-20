import { FaPlus } from "react-icons/fa6";
import OrderTable from "./OrderTable";
import { NavLink } from "react-router-dom";

const AddOrderHead = () => {
    return (
        <div className='shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 border rounded-lg'>
            <div className='flex justify-between items-center px-6 pt-6'>
                <h3 className='text-xl font-semibold'>Total 0 Orders</h3>
                <div>
                    <NavLink to="createOrder">
                        <button className="btn btn-primary">
                            <FaPlus className="text-2xl text-white"></FaPlus>
                            Add New Order</button>
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 px-6">
                <div>
                    <label>Show:</label>
                    <select className="select input select-bordered ml-2 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" name="category" required>
                        <option value={'10'}>10</option>
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
                <hr />
                <OrderTable></OrderTable>
            </div>
        </div>
    );
};

export default AddOrderHead;
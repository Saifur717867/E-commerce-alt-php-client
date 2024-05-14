import { GiTakeMyMoney } from "react-icons/gi";
import { FiCodesandbox } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { TfiShoppingCartFull } from "react-icons/tfi";


const OverView = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gird-cols-4 gap-6">
            <div className="border shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 rounded-md">
                <div className="flex justify-between items-center p-6">
                    <div className="border bg-blue-100 rounded-md p-3">
                        <GiTakeMyMoney className="text-4xl text-blue-500"></GiTakeMyMoney>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">0</h4>
                        <p className="text-slate-500 text-xl font-semibold">Total Revenue</p>
                    </div>
                </div>
            </div>
            <div className="border shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 rounded-md">
                <div className="flex justify-between items-center p-6">
                    <div className="border bg-orange-100 rounded-md p-3">
                        <TfiShoppingCartFull className="text-4xl text-orange-500"></TfiShoppingCartFull>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">0</h4>
                        <p className="text-slate-500 text-xl font-semibold">Orders</p>
                    </div>
                </div>
            </div>
            <div className="border shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 rounded-md">
                <div className="flex justify-between items-center p-6">
                    <div className="border bg-red-100 rounded-md p-3">
                        <FiCodesandbox className="text-4xl text-red-500"></FiCodesandbox >
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">0</h4>
                        <p className="text-slate-500 text-xl font-semibold">Stores</p>
                    </div>
                </div>
            </div>
            <div className="border shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 rounded-md">
                <div className="flex justify-between items-center p-6">
                    <div className="border bg-purple-100 rounded-md p-3">
                        <FaUserGroup className="text-4xl text-purple-500"></FaUserGroup>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-semibold">0</h4>
                        <p className="text-slate-500 text-xl font-semibold">Total Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;
import { NavLink } from "react-router-dom";
import DashBoardHead from "../Dashboard/DashBoardHead";
import { FaUser, FaFileInvoice, FaTruck } from "react-icons/fa";
import { FiTruck, FiGlobe, FiPackage, FiAirplay, FiShoppingCart, FiFileText } from "react-icons/fi";
import Dashboard from "../Dashboard/Dashboard-pages/Dashboard";


const DashboardLayOut = () => {
    return (
        <div>
            <DashBoardHead></DashBoardHead>
            <div className="flex justify-between gap-6">
                <div className="w-[18%] min-h-screen bg-slate-100 shadow-lg shadow-slate-900/100 shadow-b-2 shadow-r-[3px] -shadow-spread-2">
                    <h4 className="uppercase text-sm font-bold py-3 ml-4">Navigation</h4>
                    <div>
                        <ul>
                            <li className="font-semibold"><NavLink to='/dashboard/admin' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block "
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiAirplay className="mr-4 text-xl"></FiAirplay >
                                    <p>Dashboard</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/product' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block"
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiGlobe className="mr-4 text-xl"></FiGlobe >
                                    <p>Website</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/store' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block "
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiPackage className="mr-4 text-xl"></FiPackage >
                                    <p>Store</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/courier' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block"
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiTruck className="mr-4 text-xl"></FiTruck>
                                    <p>Courier</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/order' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block "
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiShoppingCart className="mr-4 text-xl"></FiShoppingCart >
                                    <p>Order</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/invoiced' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block "
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FaFileInvoice className="mr-4 text-xl"></FaFileInvoice >
                                    <p>Invoiced</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/delivered' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block"
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FaTruck className="mr-4 text-xl"></FaTruck >
                                    <p>Delivered</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/user' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block"
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FaUser className="mr-4 text-xl"></FaUser>
                                    <p>User</p>
                                </div>
                            </NavLink></li>
                            <li className="font-semibold"><NavLink to='/dashboard/report' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " underline py-3 bg-blue-100 block" : "py-3 block"
                            }>
                                <div className="flex justify-start items-center ml-6">
                                    <FiFileText className="mr-4 text-xl"></FiFileText >
                                    <p>Report</p>
                                </div>
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6">
                    <Dashboard></Dashboard>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayOut;
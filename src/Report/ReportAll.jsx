import { FaPrint } from "react-icons/fa6";
import ReportCourierTable from "./ReportCourierTable";

const ReportAll = () => {
    return (
        <div className="p-6 rounded-md border shadow-md shadow-slate-900/10 shadow-b-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
                <div>
                    <p className="text-md font-medium mb-2">Start Date</p>
                    <input className="py-2 rounded-sm px-2 border w-full shadow-md shadow-slate-900/10 shadow-b-2" type="date" />
                </div>
                <div>
                    <p className="text-md font-medium mb-2">End Date</p>
                    <input className="py-2 rounded-sm px-2 border w-full shadow-md shadow-slate-900/10 shadow-b-2" type="date" />
                </div>
                <div>
                    <p className="text-md font-medium mb-2">Select Courier</p>
                    <select className="select input select-bordered py-0 rounded-sm px-2 border w-full shadow-md shadow-slate-900/10 shadow-b-2" name="category" required>
                        <option value={'10'}>Select A Courier</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div>
                    <p className="text-md font-medium mb-2">Select A User</p>
                    <select className="select input select-bordered py-0 rounded-sm px-2 border w-full shadow-md shadow-slate-900/10 shadow-b-2" name="category" required>
                        <option value={'10'}>Select A User</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div>
                    <p className="text-md font-medium mb-2">Select Status</p>
                    <select className="select input select-bordered py-0 rounded-sm px-2 border w-full shadow-md shadow-slate-900/10 shadow-b-2" name="category" required>
                        <option value={'10'}>All</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="mt-8">
                    <button className="btn btn-info text-white"><FaPrint></FaPrint>Print</button>
                </div>
            </div>
            <div>
                <ReportCourierTable></ReportCourierTable>
            </div>
        </div>
    );
};

export default ReportAll;

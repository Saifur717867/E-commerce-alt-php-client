import DateShow from "./DateShow";
import OverView from "./OverView";
import RecentUpdate from "./RecentUpdate";
import StockOut from "./StockOut";
import TodayReport from "./TodayReport";


const Dashboard = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h3 className="text-yellow-500">Welcome to Happy Mart</h3>
                <div>
                    <DateShow></DateShow>
                </div>
            </div>
            <div className="my-6">
                <OverView></OverView>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-32">
                <TodayReport></TodayReport>
                <StockOut></StockOut>
                <RecentUpdate></RecentUpdate>
            </div>
        </div>
    );
};

export default Dashboard;
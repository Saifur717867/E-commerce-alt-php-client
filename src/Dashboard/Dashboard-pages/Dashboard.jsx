import DashBoardHead from "../DashBoardHead";
import DateShow from "./DateShow";


const Dashboard = () => {
    return (
        <div className="">
            <div className="">
                <div className="flex justify-between items-center">
                    <h3 className="text-yellow-500">Welcome to Happy Mart</h3>
                    <div>
                        <DateShow></DateShow>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatibus magni accusamus quisquam possimus dolores veniam, doloribus aliquid quaerat facere aspernatur, aut reprehenderit numquam ad mollitia modi dolorum maiores odio!</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
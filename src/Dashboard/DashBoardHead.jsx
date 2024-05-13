import userImg from "../assets/images/user-1.jpg"

const DashBoardHead = () => {
    return (
        <div>
            <nav className="bg-blue-900 py-4 shadow shadow-slate-500/50">
                <div className="w-[80%] mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Happy Mart</h3>
                    </div>
                    <div>
                        <div></div>
                        <div className="flex justify-between items-center gap-6">
                            <img className="w-[40px] h-auto" src={userImg} alt="user" />
                            <p className="text-white">user name</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DashBoardHead;

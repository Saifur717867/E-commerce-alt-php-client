// import userImg from "../../../src/assets/images/user-1jpg";

import useAuth from "../../Hooks/useAuth";

const DashBoardHead = () => {

    const { user, logOut, loading } = useAuth();

    const handleSignOut = () => {
        console.log('clicked');

        logOut()
            .then()
            .catch()
    }

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
                            {/* <img className="w-[40px] h-auto" src={userImg} alt="user" /> */}
                            <p className="text-white">user name</p>
                            <button onClick={handleSignOut} className="btn btn-success text-white">Sign out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DashBoardHead;

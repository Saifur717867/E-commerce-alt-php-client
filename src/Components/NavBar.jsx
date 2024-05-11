import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
    const nav = [

        { title: 'Home & Living', Path: '/arrival' },
        { title: 'Electronics & Gadgets', Path: '/home' },
        { title: 'Kitchen & Dining', Path: '/kitchen' },
        { title: 'New Arrival', Path: '/kitchen' },
    ]
    return (
        <div className="bg-red-500 py-3">
            <div className="flex w-[80%] mx-auto items-center justify-between">
                <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between text-purple-600 cursor-pointer">
                        <FaBars className="text-2xl" />
                        <h3 className="px-3 text-xl font-semibold uppercase">Categories</h3>
                        <IoMdArrowDropdown className="text-2xl" />
                    </div>
                </div>
                <div>
                    <ul className="text-xl font-semibold uppercase text-white flex items-center space-x-7">
                        {
                            nav.map((item) => <li key={item.title} className="cursor-pointer flex justify-between">{item.title}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
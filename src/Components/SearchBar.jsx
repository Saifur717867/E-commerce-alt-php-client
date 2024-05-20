import logo from '../../src/assets/images/mylogo.png';
import { FaCartPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div className='flex w-[80%] mx-auto justify-between items-center my-4'>
            <div>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className='grow mx-5'>
                <label className="input input-bordered flex items-center relative">
                    <input type="text" className="grow" placeholder="Search Your Products" />
                    <div className='p-4 bg-red-500 absolute top-0 right-0 rounded-r-lg cursor-pointer'>
                        <FiSearch className='text-white' />
                    </div>
                </label>

            </div>
            <div className='flex justify-between items-center gap-6'>
                <FaCartPlus className='text-4xl' />
                <NavLink to="/login">
                    <button className='btn btn-success'>Log In</button>
                </NavLink>
            </div>
        </div>
    );
};

export default SearchBar;
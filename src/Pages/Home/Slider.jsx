import SdSlider from "./SdSlider";
import { FaCircleArrowRight } from "react-icons/fa6";


const Slider = () => {

    const nav = [
        { title: 'Home & Living', Path: '/arrival' },
        { title: 'Electronics & Gadgets', Path: '/home' },
        { title: 'Kitchen & Dining', Path: '/kitchen' },
        { title: 'New Arrival', Path: '/kitchen' },
        { title: 'Winter Cloths', Path: '/kitchen' },
        { title: 'Todays Offer', Path: '/kitchen' },
        { title: 'Summer Cloths', Path: '/kitchen' },
    ]
    return (
        <div className="w-[80%] mx-auto my-3">
            <div className="grid grid-cols-4 min-h-52">
                <div className="col-span-1">
                    <ul className="text-md font-semibold uppercase text-purple-600">
                        {
                            nav.map((item) => <li className="cursor-pointer my-3">
                                <div className="flex items-center gap-3">
                                    <div>
                                        {item.title}
                                    </div>
                                    <div>
                                        <FaCircleArrowRight />
                                    </div>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="col-span-3">
                    <div>
                        <SdSlider></SdSlider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
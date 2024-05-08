import { FaHeadset } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className="bg-[#373F50] py-2">
            <div className="w-[80%] mx-auto text-white">
                <div className="relative">
                    <marquee>Happy Mart এ আপনাকে স্বাগতম  । বাংলাদেশের বিশ্বস্ত অনলাইন শপ । সারাদেশে ক্যাশ অন ডেলিভারি (৪৮ থেকে ৭২ ঘণ্টার মধ্যে নিশ্চিত ডেলিভারি)হটলাইনঃ 01717583509</marquee>
                    <div className="text-right absolute top-0 right-0 bg-[#373F50] flex items-center ">
                        <FaHeadset className="text-[#fe696a] mx-3" />
                        <p>কল করুনঃ- 01717583509</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;
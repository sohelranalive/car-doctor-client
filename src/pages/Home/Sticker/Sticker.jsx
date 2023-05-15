import { FcCalendar, FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";

const Sticker = () => {
    return (
        <div className="bg-black text-white rounded-lg mt-5 md:flex py-12 px-12 justify-around items-center space-y-5 md:space-y-0">
            <div className="flex items-center">
                <FcCalendar className="text-orange-500 text-3xl" />
                <div className="ml-4">
                    <small>We are open monday-friday</small>
                    <p>7.00 am to 9.00 pm</p>
                </div>
            </div>
            <div className="flex items-center">
                <FcPhone className="text-orange-500 text-3xl" />
                <div className="ml-4">
                    <small> Have a question?</small>
                    <p>+2546 251 2658</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                <div className="ml-4">
                    <small>Need a repair? our address</small>
                    <p>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Sticker;
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <div className="w-[300px] h-[170px]">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </div>
            </figure>
            <div className="card-body flex flex-row justify-between items-center">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-orange-500 font-bold">Price: $ {price}</p>
                </div>
                <div className="card-actions text-orange-500 font-extrabold">
                    <Link to={`checkout/${_id}`}>
                        <button className=""><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-delta-taupe.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-16">
            <div className="text-center space-y-5 ">
                <h1 className='text-orange-500 font-extrabold text-2xl'>About Us</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <div className="my-8 text-center">
                <button className="btn btn-outline btn-warning">More Services</button>
            </div>
        </div>
    );
};

export default Services;
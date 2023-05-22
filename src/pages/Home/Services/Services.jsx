import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const [searchText, setSearchText] = useState('')
    const search = useRef()

    useEffect(() => {
        fetch(`https://car-doctor-server-blue-one.vercel.app/services?searchText=${searchText}&sort=${asc ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, searchText])

    // const handleSearch = () => {
    //     setSearchText(search.current.value);
    // }

    return (
        <div className="mt-16">
            <div className="text-center space-y-5 ">
                <h1 className='text-orange-500 font-extrabold text-2xl'>About Us</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <br />
                {/* <div className="form-control">
                    <div className="input-group">
                        <input
                            ref={search}
                            type="text" placeholder="Search…" className="input input-bordered" />
                        <button
                            onClick={handleSearch}
                            className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div> */}
                <div className="form-control w-4/6 mx-auto">
                    <input
                        onChange={() => setSearchText(search.current.value)}
                        ref={search}
                        type="text" placeholder="Search…" className="input input-bordered" />
                </div>


                <br />
                <button
                    className="btn btn-primary"
                    onClick={() => setAsc(!asc)}
                >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
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
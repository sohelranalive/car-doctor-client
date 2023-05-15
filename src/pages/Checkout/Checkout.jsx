import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {

    const { user } = useContext(AuthContext)

    const loadedData = useLoaderData()
    // console.log(loadedData);
    const { _id, title, price, img } = loadedData;

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            price,
            service_id: _id,
            service_name: title,
            img
        }

        console.log(order);

        fetch('https://car-doctor-server-delta-taupe.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Service Booked')
                }
            })
    }

    return (
        <div className="card-body w-4/6 mx-auto">

            <h1 className="text-center text-4xl font-bold pb-10">Service: {title}</h1>

            <form onSubmit={handleBooking}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" defaultValue={`$ ` + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [control, setControl] = useState(false)
    const navigate = useNavigate()

    const url = `https://car-doctor-server-delta-taupe.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doc-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    //logout then navigate
                    navigate('/')
                }

            })
    }, [control, url, navigate])

    const handleStatusChanged = (id) => {
        console.log('Clicked', id);

        fetch(`https://car-doctor-server-delta-taupe.vercel.app/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newList = [updated, ...remaining]
                    setBookings(newList)
                }
            })

        console.log(bookings)

    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Your total number of bookings: {bookings.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                control={control}
                                setControl={setControl}
                                handleStatusChanged={handleStatusChanged}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
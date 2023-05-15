const BookingRow = ({ booking, control, setControl, handleStatusChanged }) => {

    const { _id, date, price, service_name, img, status } = booking;

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure?')
        if (proceed) {
            fetch(`https://car-doctor-server-delta-taupe.vercel.app/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setControl(!control)
                    }
                })
        }
    }

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_name}</div>
                    </div>
                </div>
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm'
                        ? <small className="font-bold text-orange-500">Confirmed</small>
                        : <button onClick={() => handleStatusChanged(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;
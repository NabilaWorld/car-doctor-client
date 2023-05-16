import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Bookservice = () => {
    const service = useLoaderData([]);
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-3'>Book Service: {title} </h2>

            <form onSubmit={handleBookService}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">   Name</span>
                        </label>
                        <input type="text"  name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" />

                    </div>
                    
                </div>

                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" defaultValue={'$'+price} placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        
                        <input className='btn btn-primary'  type="submit" value="Submit" />
                        
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Bookservice;
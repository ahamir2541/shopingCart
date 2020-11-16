import React from 'react';
import { useState } from 'react';

const CheckoutForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        const order = {
            email,
            name,
            address,
        }
        console.log(order)
        setEmail('')
        setName('')
        setAddress('')
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <label >Email :</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter email"
                    type="email" />
                <label >Name :</label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter name"
                    type="text" />
                <label >Address :</label>
                <input
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="form-control"
                    placeholder="Enter address"
                    type="text" />
                <button className="btn btn-primary mt-2" >checkout</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
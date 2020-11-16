import React from 'react';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm'

const Proceed = ({ cartItems }) => {
    const [showCheckout, setShowCheckout] = useState(false)
    const totalAmount = cartItems.reduce((a, c) => a + c.price * c.count, 0)

    return (
        <div>
            <div className="proceed d-flex mt-4">
                <span className="totalAmount">Total: ${totalAmount.toFixed(2)} </span>
                <span><button onClick={() => {
                    setShowCheckout(!showCheckout)
                } } className="btn btn-success" >proceed</button></span>
            </div>
            <div className="div">
                { showCheckout && <CheckoutForm /> }
            </div>
        </div>
    );
};

export default Proceed;
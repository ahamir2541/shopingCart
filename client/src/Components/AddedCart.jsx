import React from 'react';
import Fade from 'react-reveal/Fade'

const AddedCart = ({item, removeFromCart}) => {
    const { count, price, image, title, _id } = item
    return (
        <div className="addCart d-flex mt-3">
            <Fade left >
            <div>
                <img className="img-fluid addCart_img mr-4" src={image} alt="" />
            </div>
            <div>
                <p> {title} </p>
                <span> {count} X ${price} </span> <span><button onClick={() => removeFromCart(_id) } className="btn btn-danger" >Remove</button></span>
            </div>
            </Fade>
        </div>
    );
};

export default AddedCart;
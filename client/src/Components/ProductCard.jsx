import React, { useState } from 'react';
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'

const ProductCard = ({ product, addToCart }) => {
    const [newProduct, setNewProduct] = useState(null)
    const { image, title, price, _id } = product

    const openModal = (product) => {
        setNewProduct(product)
    }

    const closeModal = () => {
        setNewProduct(null)
    }

    return (
        <div className="col-md-4 mb-3">
            <img onClick={() => openModal(product)} className="img-fluid productImag" src={image} alt={_id} />
            <p> {title} </p>
            <div className="d-flex justify-content-between">
                <div>
                    <span>$</span>{price}
                </div>
                <div>
                    <button onClick={() => addToCart(product)} className="btn btn-info">Add to cart</button>
                </div>
            </div>
            { newProduct &&
                <Modal
                    onRequestClose={closeModal}
                    isOpen={true} >
                    <Zoom >
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid modal_img" src={newProduct.image} alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                    <h6> {newProduct.title} </h6>
                                    <button onClick={closeModal} className="closeBtn">X</button>
                                </div>
                                <div className="modal_description mt-4">
                                    {newProduct.description}
                                </div>
                                <div className="availableSizes">
                                    AvailableSizes : {newProduct.availableSizes.map(size => (
                                    <span key={size} > {size} </span>
                                ))}
                                </div>
                                <div className="modalAmount d-flex justify-content-between">
                                    <div>
                                        <h3>price : {newProduct.price}</h3>
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            addToCart(product);
                                            closeModal()
                                        }} className="btn btn-info" >Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>}
        </div>

    );
};

export default ProductCard;
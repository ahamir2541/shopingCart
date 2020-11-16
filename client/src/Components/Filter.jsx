import React from 'react';

const Filter = ({products, sort, sortProduct, sizeProduct, size}) => {
    return (
        <div className="productPanel">
            <div className="row">
                <div className="col-md-4">
                    <p> {products.length} Products </p>
                </div>
                <div className="col-md-4">
                    <p> <span className="mr-2">Order</span>
                        <select value={sort}  onChange={sortProduct} >
                            <option >Latest</option>
                            <option value="Lowest">Lowest</option>
                            <option value="Highest">Highest</option>
                        </select> </p>
                </div>
                <div className="col-md-4">
                    <p> <span className="mr-2">Filter</span>
                        <select value={size} onChange={sizeProduct} >
                            <option value="">ALL</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XLL">XLL</option>
                            <option value="XXL">XXL</option>
                        </select> </p>
                </div>
            </div>
        </div>
    );
};

export default Filter;
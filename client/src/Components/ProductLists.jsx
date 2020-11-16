import React, { useState } from 'react';
import ProductCard from './ProductCard'
import data from '../data.json'
import AddedCart from './AddedCart'
import Filter from './Filter'
import Proceed from './Proceed'

const ProductLists = () => {
    const [products, setProducts] = useState(data.products)
    const [sort, setSort] = useState('')
    const [size, setSize] = useState('')
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    )

    const sortProduct = e => {
        const sort = e.target.value
        setSort(sort)
        setProducts(products.slice().sort((a, b) => (
            sort === "Lowest" ?
                ((a.price > b.price) ? 1 : -1) :
                sort === 'Highest' ?
                    a.price < b.price ? 1 : -1
                    :
                    a._id > b._id ? 1 : -1
        )))
    }

    const sizeProduct = e => {
        if (e.target.value === '') {
            setSize(e.target.value)
            setProducts(data.products)
        } else {
            setSize(e.target.value)
            setProducts(data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0))
        }
    }

    const addToCart = product => {
        const newCartItems = cartItems.slice()
        let alreadyIncart = false
        newCartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++
                alreadyIncart = true
            }
        })
        if (!alreadyIncart) {
            newCartItems.push({ ...product, count: 1 })
        }
        setCartItems(newCartItems)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }

    const removeFromCart = id => {
        const newCartItems = cartItems.slice()
        setCartItems(newCartItems.filter(item => item._id !== id))
        localStorage.setItem('cartItems', JSON.stringify(newCartItems.filter(item => item._id !== id)))
    }

    return (
        <div className="productContainer">
            <div className="row mt-4">
                <div className="col-md-8">
                    <Filter
                        size={size}
                        sizeProduct={sizeProduct}
                        sort={sort}
                        sortProduct={sortProduct}
                        products={products} />

                    <div className="row">
                        {products.map(product => (
                                <ProductCard
                                    addToCart={addToCart}
                                    key={product._id}
                                    product={product} /> 
                        ))}
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="cartPanel">
                        {cartItems.length === 0 ?
                            <p>Cart is empty</p>
                            :
                            <p>You have {cartItems.length} items in the cart</p>}
                    </div>
                    <div className="addedCatContainer mb-5 mt-3">
                        <div className="addProductList">
                            {cartItems.map(item => (
                                <AddedCart
                                    removeFromCart={removeFromCart}
                                    key={item._id}
                                    item={item} />
                            ))}
                        </div>

                        {cartItems.length !== 0 ? <Proceed cartItems={cartItems} /> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLists;
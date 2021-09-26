import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const packages of cart) {
        total = total + packages.TravelExpenses

    }
    return (
        <div>
            <h5>Package-Item: {cart.length}</h5>
            <h6>Total-Amount:  {total}</h6>


        </div>
    );
};

export default Cart;
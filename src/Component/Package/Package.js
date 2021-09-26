import React from 'react';
import './Package.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Package = (props) => {
    // Destructuring
    const { name, images, DateOfTravel, RetrunDate, TravelExpenses, BookingMoney } = props.package;
    // Add to icon
    const icon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="col">
            <div className="card h-100">
                <img src={images} className="img" alt="..." />
                <div className="card-body">
                    <h5 className="card-text"> {name}</h5>
                    <p className="card-text">Travel-Date : {DateOfTravel}</p>
                    <p className="card-text">Retrun-Date : {RetrunDate}</p>
                    <h6 className="card-text">Travel-Expenses : ৳ {TravelExpenses} </h6>
                    <h6 className="card-text">Booking-Money : ৳ {BookingMoney}  </h6>
                </div>

                <div>
                    <button className="btn" onClick={() => props.handleAddBtn(props.package)}>{icon}  Add To Cart</button>
                </div>


            </div>
        </div>
    );
};
export default Package;
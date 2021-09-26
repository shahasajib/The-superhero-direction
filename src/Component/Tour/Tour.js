import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Package from '../Package/Package';
import "./Tour.css"

const Tour = () => {
    const [packages, setPackages] = useState([]);
    const [cart, setCart] = useState([]);
    // Data Load
    useEffect(() => {
        fetch("./tour.JSON")
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    // Add to cart
    const handleAddBtn = (packages) => {
        const newCart = [...cart, packages];
        setCart(newCart)

    }
    return (

        <div className="tour-package">

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    packages.map(packages => <Package
                        package={packages}
                        key={packages.id}
                        handleAddBtn={handleAddBtn}
                    >
                    </Package>)
                }
            </div>
            <div className="package-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>


    );
};

export default Tour;
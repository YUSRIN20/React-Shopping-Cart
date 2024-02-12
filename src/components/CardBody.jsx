import React, { useState } from 'react';
import './Style/CardBody.css'
const CardBody = ({ item, setCartcount }) => {
    const [CartStatus, SetCartStatus] = useState(true)

    const CartAdd = () => {
        SetCartStatus(false)
        setCartcount((pval) => pval + 1)
    }

    const CartRemove = () => {
        SetCartStatus(true)
        setCartcount((pval) => pval - 1)
    }
    return (
        <div key={item}>
            {/* if you arrange cards with numberic order you can add id on arrayofobjects and here you can add item.id */}
            <div class="col mb-5"  id="card-w">
                <div class="card h-100" id="cards">
                    <img src={item.image} class="card-img-top" alt="..."></img>
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="fw-bolder">{item.name}</h5>
                            {item.rating ? (

                                <div className="text-warning  text-center mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            ) : (
                                <></>
                            )}
                            {/* <!-- Product price--> */}
                            <p class="card-price text-center" id="original-price">{item.price}</p>
                            <p class="card-price text-muted text-center"><del>{item.delPrice}</del></p>
                        </div>
                    </div>
                    <div class="text-center" id="btn-div">
                        {CartStatus ? <button class="btn btn-success" id="btn" onClick={CartAdd}>Add to Cart</button>
                            : <button class="btn btn-danger" id="btn" onClick={CartRemove}>Remove from Cart</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBody;


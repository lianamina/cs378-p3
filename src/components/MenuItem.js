import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, imageName, price, count, addToCart, removeFromCart }) => {
    return (
        <div className="col-12 mb-4">
            <div className="card h-100 border-0 menu-item-background">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-4 col-sm-4 col-md-4">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${imageName}`}
                            className="img-fluid rounded-start"
                            alt={title}
                        />
                    </div>
                    <div className="col-8 col-sm-8 col-md-8">
                        <div className="card-body">
                            <h5 className="card-title menu-item-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="menu-item-price">${price.toFixed(2)}</p>
                                <div className="d-flex align-items-center">
                                    <button className="menu-item-button btn" onClick={removeFromCart} disabled={count === 0}>-</button>
                                    <span className="mx-2">{count}</span>
                                    <button className="menu-item-button btn" onClick={addToCart}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
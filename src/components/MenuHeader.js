import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuHeader = ({ title, logo, description, tagline }) => {
    return (
      <div className="container mb-4">
        <div className="row d-flex align-items-center justify-content-center">
          {/*Logo*/}
          <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/${logo}`}
              className="logo-size"
              alt={description}
            />
          </div>
          {/* Header*/}
          <div className="col-md-9 col-12 text-center text-md-start">
            <h1 className="menu-header-title">{title}</h1>
            <h3 className="menu-header-description">{description}</h3>
            <p className="menu-header-tagline">{tagline}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuHeader;
  
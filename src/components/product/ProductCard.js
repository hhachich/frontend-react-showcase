import React from "react";

function ProductCard({ product }) {
  return (
    <>
      <div className="col s12 m3">
        <div className="card">
          <div className="card-image">
            <img alt={product.image.data.attributes.title} src={process.env.REACT_APP_APP_URL + product.image.data.attributes.url} />
          </div>
          <div className="card-content">
            <span className="card-title" >{product.title}</span>
            <p>{product.description.substring(0, 50) + "..."}</p>
          </div>
          <div className="card-action">
            <a href="#">Details</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

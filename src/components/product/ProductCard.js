import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, id }) {
  console.log(id)
  console.log(product)
  return (
    <>
      <div className="col s12 m3">
        <div className="card">
          <div className="card-image">
            {product.image.data
              ? <img alt={product.image.data.attributes.title} src={process.env.REACT_APP_APP_URL + product.image.data.attributes.url} />
              : <p>image not found</p>
            }
          </div>
          <div className="card-content">
            <span className="card-title" >{product.title}</span>
            <p>{product.description.substring(0, 50) + "..."}</p>
          </div>
          <div className="card-action">
            <Link to={`/pd/${id}`}> Details  </Link>
          </div>
        </div>
      </div >
    </>
  );
}

export default ProductCard;

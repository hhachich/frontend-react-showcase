import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./ProductDetail.css"
function ProductDetail() {

  const { id } = useParams()
  console.log("ProductDetail", id)

  const [product, setProduct] = useState()

  const fetchProduct = async () => {
    const res = await axios.get(
      process.env.REACT_APP_API_URL +
      "/products?populate=*&filters[id][$eq]=" + id,
      {
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
        },
      }
    );
    setProduct(res.data.data)
  };
  //appel de l'api
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product)
  return (
    <>

      <h2>ProductDetail </h2>
      {product ? (
        <div className="product">
          <h3 className="product-title">{product[0].attributes.title} </h3>
          <p className="product-description">Description : {product[0].attributes.description} </p>
          <p className="product-price">Price : {product[0].attributes.price} </p>

          <img className="product-image" alt={product[0].attributes.image.data.attributes.formats.medium.name} src={process.env.REACT_APP_APP_URL + product[0].attributes.image.data.attributes.formats.medium.url} />

          <p className="product-categories">categories :

            <span>  {product[0].attributes.categories.data.map(categorie => (
              <p key={categorie.id}>{categorie.attributes.title}</p>
            ))}
            </span>
          </p>

          <p className="product-categories">subcategories :

            <span>  {product[0].attributes.subcategories.data.map(subcategorie => (
              <p key={subcategorie.id}>{subcategorie.attributes.title}</p>
            ))}
            </span>
          </p>
        </div>

      ) : (
        <h4 className="center">Aucun product à afficher !</h4>
      )}
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </>
  );
}

export default ProductDetail;

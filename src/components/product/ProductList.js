import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList(props) {
  // les products recuperer grace a axios 
  const [products, setProduct] = useState([])
  // requette axios 
  const fetchProducts = async () => {
    const res = await axios.get(
      process.env.REACT_APP_API_URL +
      "/products?populate=*",
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
    fetchProducts();
  }, []);

  return <>
    <h2 className="center">ProductList</h2>

    <div className="container">
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} id={product.id} product={product.attributes} />
        ))}
      </div>
    </div>

  </>
}

export default ProductList;

import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <h1>ProductList</h1>
    {products.map((product) => (
      <div>{product.attributes.title}</div>
    ))}


  </>
}

export default ProductList;
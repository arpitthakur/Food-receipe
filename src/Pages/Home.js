import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Components/Search";

function Home() {
  const [products, setProducts] = useState([]); //create state for Data setup
  const [searchproducts, setSearchProducts] = useState([]);

  useEffect(() => {
    api_products();
  }, []);

  const api_products = async () => {
    const data = await Axios.get("https://fakestoreapi.com/products");
    setProducts(data.data);
    setSearchProducts(data.data)
  };



  return (
    <>
      {/* Header Component */}
      <Search
        searchproducts={searchproducts}
        setSearchProducts={setSearchProducts}
        products={products}
        setProducts={setProducts}
      />
      {/* Header Component */}

      <div className="container">
        <div className="row">
          {products?.map((item, i) => (
            <div className="col-4">
              <img style={{ width: "100px" }} key={i} src={item.image}></img>
              <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
              <h1 className="text-black" style={{ fontSize: "16px" }}>
                {" "}
                {item.price}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [products, setProducts] = useState([]); //create state for Data setup
  console.log("data", products);

  useEffect(() => {
    api_products();
  }, []);
  //Data from API
  const api_products = async () => {
    const data = await Axios.get("https://fakestoreapi.com/products");
    console.log("data2", data);
    setProducts(data.data); 

  };

  return (
    <>
      <div>
        {products?.map((item, i) => (

          <h1 className="text-black" key={i}> 
          <div>
           <img src = {item.image}></img>
          </div>
          {item.price}</h1>

        ))}


      </div>
    </>
  );
}

export default Home;

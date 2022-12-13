import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Components/Search";

function Home() {
  const [products, setProducts] = useState([]); //create state for Data setup
  const [searchproducts, setSearchProducts] = useState([]);
  const [showTab,setshowTab] = useState(false);
  const [favorite,setFavorite] = useState([]);

  useEffect(() => {
    api_products();
  }, []);

  const api_products = async () => {
    const data = await Axios.get("https://fakestoreapi.com/products");
    setProducts(data.data);
    setSearchProducts(data.data)
  };
  const handleFavorite = (id)=>{
    let temp = [...favorite]
    let index = temp.indexOf(id)
    if(index<0){
      temp.push(id)
      setFavorite([...temp])
    }
  }
  const removeFavorite=(id)=>{
    console.log("hello")
    let temp = [...favorite]
    let index = temp.indexOf(id)
     temp.splice(index,1)
     setFavorite([...temp])
  }
  const checkShow=(id)=>{
    let temp = [...favorite]
    let index = temp.indexOf(id)
    console.log(index)
    if(index<0){
      return false
    }
    else{
      return true
    }
  }
  useEffect(() => {
    console.log("favorite",favorite)
  }, [showTab]);



  return (
    <>
      {/* Header Component */}
      <Search
        searchproducts={searchproducts}
        setSearchProducts={setSearchProducts}
        products={products}
        setProducts={setProducts}
        setshowTab ={setshowTab}
      />
      {/* Header Component */}
      {/*Add to favorite*/}
      {!showTab?
        <div className="container">
        <div className="row">
          {products?.map((item, i) => (
            <div className="col-4">
              <img style={{ width: "100px" }} key={i} src={item.image}></img>
              <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
           {   !checkShow(item.id)?<>
              <button class="btn btn-primary rounded-pill mx-1 px-3" onClick={()=>handleFavorite(item.id)}>Add to favorite</button>
              </>:
              <>
              <button class="btn btn-primary rounded-pill mx-1 px-3">Added</button>
              </>}
              <h1 className="text-black" style={{ fontSize: "16px" }}>
                {" "}
                {item.price}
              </h1>
            </div>
          ))}
        </div>
      </div>
      :
      <>
      {/* Add to favorite */}
      {/* Remove from favorite */}
      {products?.map((item,index)=>{
        return(
          checkShow(item.id)? <>
          <div className="col-4">
              <img style={{ width: "100px" }} key={index} src={item.image}></img>
              <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
              
              <button class="btn btn-primary rounded-pill mx-1 px-3" onClick={()=>removeFavorite(item.id)}>Remove</button>
              <h1 className="text-black" style={{ fontSize: "16px" }}>
                {" "}
                {item.price}
              </h1>
            </div>
           
             {/* Remove from favorite */}

        </>:
        <></>
      
      )})}
      </>
      }

      
    </>
  );
}

export default Home;

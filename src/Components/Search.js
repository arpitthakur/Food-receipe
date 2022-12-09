import React, { useState } from "react";

function Search(props) {

const {searchproducts ,products, setProducts}= props
console.log(props)  
const [search,setSearch] =useState("")
  const input_handler = () => {
    const filteredCharacters = searchproducts.filter(character => {
      return (
        character.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    
    console.log(filteredCharacters)
    setProducts(filteredCharacters)
  };
  //searchClick function


  return (
    <>
      {/* Header */}
      <div className="container text-center">
        <h1 className=" display-1 ">Product App</h1>
        <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
          <input type="text" value={search} onChange={(event)=> setSearch(event.target.value)} />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
               onClick={input_handler}


            >
              <b>Search</b>
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill mx-1 px-3"
          >
            <b>Favourite</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;

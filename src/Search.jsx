import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search=()=>{
  
  const [img,setImg]=new useState("");

  const inputEvent=(event)=>{
   const data=event.target.value;
   setImg(data);
  };

 return(
  <>
  <div className="searchBar">
       <input type='text' 
              placeholder="Search Any Image" 
              value={img}
              onChange={inputEvent}
        />

     { img ===""? null : <SearchResult name={img}/> } 
  </div>
  </>
 );

}
export default Search;
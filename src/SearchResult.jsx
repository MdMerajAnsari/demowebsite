import React from "react";

const SearchResult=(props)=>{
    const img=`https://source.unsplash.com/600x300/?${props.name}`;
    return(
        <>
          <div>
              <img src={img} alt="randomImage" />
          </div>
        </>
    );
};
export default SearchResult;
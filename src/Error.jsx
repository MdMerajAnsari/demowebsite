import React from "react";
import { NavLink } from "react-router-dom";

const Error=()=>{
    return(
        <>
        <div className="errorStyle">
        <h1>404 Error page</h1>
        <h2> Sorry, This page doesn't exist </h2>
        <NavLink to="/">Go Back</NavLink>
        </div>
        </>
    );
};

export default Error;
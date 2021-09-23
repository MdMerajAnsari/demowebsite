import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Search from "./Search";
import Service from "./Service"

const App =()=>{
    return(
       <>
       <Navbar />
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/search" component={Search} />
            {/* <Route component={Error} /> */}
            <Redirect to="/" />
        </Switch>
       </>
    );
    
};
export default App;
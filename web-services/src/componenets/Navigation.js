import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return <div className="buttons">
        <Link to="/">Home</Link>
        <Link to={{
            pathname:"/about",
            
        }}>About</Link>
    </div>
}

export default Navigation;
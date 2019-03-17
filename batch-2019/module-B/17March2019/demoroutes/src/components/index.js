import React from "react";
import { Link } from "react-router-dom";


function IndexComponent() {
    return (
        <div>
            <h1>Welcome to Home </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default IndexComponent;
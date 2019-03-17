import React from "react";
import { Link } from "react-router-dom";

function AboutComponent() {
    return (
        <div>
            <h1>Welcome to About Component </h1>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/about/">About Page</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default AboutComponent;
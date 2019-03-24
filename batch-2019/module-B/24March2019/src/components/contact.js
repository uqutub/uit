import React from "react";
import { Link } from "react-router-dom";

function ContactComponent() {
    return (
        <div>
            <h1>Welcome to Contact Component </h1>
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

export default ContactComponent;
import React from 'react';
import {Link} from 'react-router-dom';


function NotFound() {
    return (
        <div className="not_found">
            <h1>404</h1>
            <h4>Ohh!.. I Think you lost in space come back to earth and do shopping at <a href="https://amazon.com">amazon</a></h4>
            <Link className="back_to_home_btn" to="/">
            &#8592; Back To Earth
            </Link>
        </div>
    )
}

export default NotFound

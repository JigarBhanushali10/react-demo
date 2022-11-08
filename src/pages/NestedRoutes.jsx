import React from 'react';
import {
    Link, Outlet
} from "react-router-dom";

const NestedRoutes = ( ) =>{
    return (
        <div>
            <h2>Topics</h2>
            <ul className='nav flex-column ' >
                <li className='nav-links'>
                    <Link to={`component`}>Components</Link>
                </li>
                <li className='nav-links'>
                    <Link to={`propsVsState`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <div className='border p-3'>
                Internal nested route allows to only reader in specific part of page with different route
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default NestedRoutes
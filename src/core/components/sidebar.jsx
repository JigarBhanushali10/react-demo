import React from 'react'
import { NavLink } from "react-router-dom"


const Sidebar = () => {


    return <>
        <div className='sidebar bg-white border border-1 flex-shrink-0' >

            <div className='p-2 m-2 text-center border-bottom'>
                LOGO
            </div>

            <ul className="nav nav-pills d-flex flex-column m-3 ">
                <li className="nav-item">
                    <NavLink to="register" className='nav-link'  >Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="parent" className='nav-link'>Parent Child Communication</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="nestedRouted" className='nav-link'>Nested-Routes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="formik" className='nav-link'>Formik</NavLink>
                </li>

            </ul>
        </div>
    </>
}
export default Sidebar
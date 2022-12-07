import React from 'react'
import { NavLink ,Link} from "react-router-dom"


const Sidebar = () => {


    return <>
        <div className='sidebar bg-white border border-1 flex-shrink-0' >

            <div className='p-2 m-2 text-center border-bottom'>
                LOGO
            </div>

            <ul className="nav nav-pills d-flex flex-column m-3 ">
                <li className="nav-item">
                    <NavLink to="register" className='nav-link'  >Register</NavLink>
                    {/* check for active class*/}
                </li>
                <li className="nav-item">
                    <NavLink  to="parent" className='nav-link'>Parent Child Communication</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="nestedRouted" className='nav-link'>Nested-Routes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="formik" className='nav-link'>Formik</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="componentComposition" className='nav-link'>Component Composition</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="yup" className='nav-link'>Formik With Yup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="employee" className='nav-link'>Employee</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="maps" className='nav-link'>React Maps</NavLink>
                </li>

            </ul>
        </div>
    </>
}
export default Sidebar
import React from 'react'
import { Link } from "react-router-dom"


const Sidebar = () => {
    return <>
        <div className='bg-white border border-1' style={{width:250}}> 
            <ul>
                <li>

                    <Link to="register">Register</Link>
                </li>
                <li>

                    <Link to="parent">Parent</Link>
                </li>
                
            </ul>
        </div>
    </>
}
export default Sidebar
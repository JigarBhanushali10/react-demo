import React from 'react';
import RouterOutlet from '../../App.routing';
import Sidebar from './sidebar';





export default function Master() {
    return <div className='d-flex h-100'>
        <Sidebar></Sidebar>
        <div className='flex-grow-1 p-3'>
            <RouterOutlet></RouterOutlet>
        </div>
    </div>
}
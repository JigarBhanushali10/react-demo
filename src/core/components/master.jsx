import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from './sidebar';

import Parent from '../../pages/Parent';
import Resgister from '../../pages/Register';

const RouterOutlet = () => {
    return <Routes>
        <Route path="/" element={<Resgister />} />
        <Route path="register" element={<Resgister />} />
        <Route path="parent" element={<Parent />} />
    </Routes>
}

export default function Master() {
    return <div className='d-flex h-100'>
        <Sidebar></Sidebar>
        <div className='flex-grow-1 p-3'>
            <RouterOutlet />
        </div>
    </div>
}
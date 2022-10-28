import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from '../layouts/sidebar';

import { Child } from './Child';
import Parent from './Parent';
import Resgister from './Register';




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
        <RouterOutlet />
    </div>
}
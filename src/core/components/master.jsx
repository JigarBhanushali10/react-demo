import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from './sidebar';

import Parent from '../../pages/Parent';
import Resgister from '../../pages/Register';
import NestedRoutes from '../../pages/NestedRoutes';

const Component =() => <h1>component</h1>
const PropsVsState =() => <h1>propsVsState</h1>

const RouterOutlet = () => {
    return <Routes>
        <Route path="/" element={<Resgister />} />
        <Route path="register" element={<Resgister />} />
        <Route path="parent" element={<Parent />} />
        <Route path="nestedRouted" element={<NestedRoutes />} >
            <Route path='component' element={<Component/>}></Route>
            <Route path='propsVsState' element={<PropsVsState/>}></Route>
        </Route>
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
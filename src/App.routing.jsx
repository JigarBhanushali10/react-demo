import React from 'react';
import { Route, Routes } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';

import ComponentComposition from './pages/ComponentComposition';
import Employee from './pages/Employee';
import Formik from './pages/Formik';
import NestedRoutes from './pages/NestedRoutes';
import Parent from './pages/Parent';
import Resgister from './pages/Register';
import YupValidation from './pages/Yup';


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
        <Route path="formik" element={<Formik />} />
        <Route path="componentComposition" element={<ComponentComposition />} />
        <Route path="yup" element={<YupValidation />} />
        <Route path="employee" element={<Employee />} />
        <Route path="employee/form" element={<EmployeeForm />} />
        <Route path="employee/form/:id" element={<EmployeeForm />} />
    </Routes>
}

export default RouterOutlet
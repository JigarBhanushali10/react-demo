import React, { Suspense } from 'react';
import { Route, Routes,Redirect,Navigate } from "react-router-dom";
import ReactMapsPOC from './pages/ReactMapsPOC';
import Loader from './shared/components/Loader';


//--------------------Lazy Loaded Pages------------------------------------------//
const ComponentComposition = React.lazy(() => import('./pages/ComponentComposition'))
const Employee = React.lazy(() => import('./pages/Employee'))
const Formik = React.lazy(() => import('./pages/Formik'))
const NestedRoutes = React.lazy(() => import('./pages/NestedRoutes'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'))
const Parent = React.lazy(() => import('./pages/Parent'))
const Resgister = React.lazy(() => import('./pages/Register'))
const YupValidation = React.lazy(() => import('./pages/Yup'))


const EmployeeForm = React.lazy(() => import('./components/EmployeeForm'))

const Component = () => <h1>component</h1>
const PropsVsState = () => <h1>propsVsState</h1>

const RouterOutlet = () => {
    return <>
        <Suspense fallback={<Loader></Loader>}>
            <Routes>
                <Route path="/" element={<Resgister />} />
                {/* <Route
                     path="*"
                     element={<Navigate to="register" replace />}
                 /> */}
                <Route path="register" element={<Resgister />} />
                <Route path="parent" element={<Parent />} />
                <Route path="nestedRouted" element={<NestedRoutes />} >
                    <Route path='component' element={<Component />}></Route>
                    <Route path='propsVsState' element={<PropsVsState />}></Route>
                </Route>
                <Route path="formik" element={<Formik />} />
                <Route path="componentComposition" element={<ComponentComposition />} />
                <Route path="yup" element={<YupValidation />} />
                <Route path="employee" element={<Employee />} />
                <Route path="employee/form" element={<EmployeeForm />} />
                <Route path="employee/form/:id" element={<EmployeeForm />} />
                <Route path="maps" element={<ReactMapsPOC />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    </>
}

export default RouterOutlet
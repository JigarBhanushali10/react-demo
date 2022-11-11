import { ErrorMessage, Field, Form, Formik } from 'formik'
import { default as React, memo, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import ModelPopUp from '../shared/components/ModelPopUp'
import empServices from '../shared/services/empService'

/**
 * @name EmployeeForm
 * @returns Jsx Form
 */
function EmployeeForm() {
    /**
     * @name title,setTitle  
     * @description title variable, setTitle method to set text to title
     */
    const [title, setTitle] = useState('Add')
    /**
     * @name navigate 
     * @descrption to use navigation  feature of react router
     */
    const navigate = useNavigate();


    const { id } = useParams()

    /**
     * @name initialValues
     * @description sets initial Values of form
     */
    const initialValues = {
        name: '',
        email: ''
    }
    /**
     * @name patchValue variable to use as a alias for initail value which will change when edit emp is called
     * @name setPatchValue : method too change value in patchValue variable. 
     */

    const [patchValue, setPatchValue] = useState(initialValues)
    /**
     * @name getEmployeeById
     * @desc: calls  getEmployeeById from service and sets page title and button tile to Update, patches value to feilds
     */
    const getEmployeeById = () => {
        setTitle('Update')
        empServices.getEmployeeById(id).then(res => {
            setPatchValue(res.data)
        })
    }

    /**
     * @name validationSchema
     * @description sets validation of form usin yup library
 */
    const validationSchema = Yup.object({
        name: Yup.string().min(2).max(5, "Name must be more than 5 characters long").required('Name is Required!'),
        email: Yup.string().email().required('Email is Required')
    })

    /**
     * @name renderError
     * @param message:string
     * @description renders validation of form usin yup library
     */
    const renderError = (message) => <p className="text-danger">{message}</p>;

    /**
     * 
     * @name shallowEqual
     * @param {*} object1 
     * @param {*} object2 
     * @returns boolean
     * @desc: checks if two object are equal
     */
    function shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (let key of keys1) {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
        return true;
    }

    /**
     * @name onSubmit
     * @param values.resetForm:string
     * @description submits form and add employee and updates emp details according to condition
     */
    const onSubmit = (values, resetForm) => {
        if (id) {
            //shallowEqual prevents extra put call if value isnt changed
            if (shallowEqual(patchValue, values)) {
                navigate('/employee')
            } else {
                empServices.updateEmployee(id, values).then(() => {
                    setModelText('Employee Updated Sucessfully')
                    setshowModel(!showModel)
                    setTimeout(() => {
                        navigate('/employee')
                    }, 1500);
                })
            }
        } else {
            resetForm();
            empServices.addEmployee(values).then(() => {
                setModelText('Employee Added Sucessfully')
                setshowModel(!showModel)
                setTimeout(() => {
                    navigate('/employee')
                }, 1500);
            })
        }
    };

    useEffect(() => {
        if (id) {
            getEmployeeById()
        }
    }, [])


    const [showModel, setshowModel] = useState(false)
    const [modelText, setModelText] = useState('')
    const onClose = (...val) => {
        setshowModel(!val)
        if(val[0]=='OK'){
            navigate('/employee')
        }
    }

    

    return (
        <>
            {
                showModel &&
                <ModelPopUp closeModel={onClose} showModel={showModel} type={'success'}>
                    {modelText}
                </ModelPopUp>
            }
            <div className='text-end'>
                <Link to='/employee' className='btn btn-outline-secondary my-3'>List</Link>
            </div>
            <h3 className='text-center text-primary '>{title} Employee</h3>
            <Formik initialValues={patchValue}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values, resetForm);
                }}
                enableReinitialize>
                <Form >
                    <div className="form-group py-2">
                        <label htmlFor="name">Name</label>
                        <Field type="text" className="form-control " id="name" name='name' placeholder="Enter Name" />{/*  by using  spread opertator with formik getfeildProps we can eliminate fe lines of code */}
                        <ErrorMessage name="name" render={renderError} />

                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="email">Email</label>
                        <Field type="text" className="form-control " id="email" name='email' placeholder="Fav. email" />
                        <ErrorMessage name="email" render={renderError} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">{title}</button>
                </Form>
            </Formik>
        </>
    )
}

export default memo(EmployeeForm)
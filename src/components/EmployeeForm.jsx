import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { default as React, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
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
    const [title, setTitle] = useState('Add Employee')
    const [patchValue, setPatchValue] = useState({})
    /**
        * @name navigate 
        * @descrption to use navigation  feature of react router
        */
    const navigate = useNavigate();

    const { id } = useParams()
    const getEmployeeById = () => {

        // todo fix this patch value
        empServices.getEmployeeById(id).then(res => {
            console.log(res.data)
            initialValues.name = res.data.name
            initialValues.email = res.data.email
            console.log(initialValues);
        })
    }


    // const getModifiedValues = ( initialValues) => {
    //     let modifiedValues = {};

    //     if (id) {
    //       Object.entries(values).forEach((entry) => {
    //         let key = entry[0];
    //         let value = entry[1];

    //         if (value !== initialValues[key]) {
    //           modifiedValues[key] = value;
    //         }
    //       });
    //     }

    //     return modifiedValues;
    //   };

    /**
     * @name initialValues
     * @description sets initial Values of form
     */
    const initialValues = {
        name: '',
        email: ''
    }
    // const patchFormValues = {
    //     name: '',
    //     email: ''
    // }

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
     * @name onSubmit
     * @param values.resetForm:string
     * @description submits form and add employee
     */
    const onSubmit = (values, resetForm) => {
        console.log(values);
        resetForm();
        empServices.addEmployee(values).then(() => navigate('/employee'))
    };

    useEffect(() => {
        if (id) {

            getEmployeeById()
        }
    }, [])


    return (
        <>
            <div className='text-end'>

                <Link to='/employee' className='btn btn-outline-secondary my-3'>List</Link>
            </div>
            <h3 className='text-center text-primary '>{title}</h3>
            <Formik initialValues={initialValues}
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
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default EmployeeForm
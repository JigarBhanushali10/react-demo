import React from 'react'
import { Field, Form, Formik, useFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const YupValidation = () => {

    // const onSubmit = (value) => {
    //     console.log(value);
    // }
    const initialValues = {
        name: '',
        food: ''
    }
    // const validate = (value) => {
    //     let error = {}
    //     if (!value.name) {
    //         error.name = 'Required'
    //     } else if (value.name.length > 5) {
    //         error.name = 'Exceeding Max length 5'
    //     }
    //     if (!value.food) {
    //         error.food = 'Required'
    //     }
    //     // console.log(error);
    //     return error
    // }

    const validationSchema = Yup.object({
        name: Yup.string().min(2).max(4,"Address must be more than 4 characters long").required('Required!!!'),
        food: Yup.string().required('Required')
    })

    const renderError = (message) => <p className="text-danger">{message}</p>;

    const onSubmit = (values, resetForm) => {
        console.log(values);
        resetForm();

    };


    //todo find formik.ref

    /**
     * latest js feature allows to create object below syntax if key value have same name 
     */
    
    return (
        <>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values, resetForm);
                }}>
                <Form >
                    <div className="form-group py-2">
                        <label htmlFor="name">Name</label>
                        <Field type="text" className="form-control " id="name" name='name' placeholder="Enter Name" />{/*  by using  spread opertator with formik getfeildProps we can eliminate fe lines of code */}
                        <ErrorMessage name="name"   render={renderError} />

                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="food">Food</label>
                        <Field type="text" className="form-control " id="food" name='food' placeholder="Fav. Food" />
                        <ErrorMessage name="food" render={renderError} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </Form>
            </Formik>
        </>
    )
}





export default YupValidation
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'



const Formik = () => {

    const onSubmit = (value) => {
        console.log(value);
    }
    const initialValues = {
        name: '',
        food: ''
    }
    // const validate = (value) => {
    //     let error = {}
    //     if (!value.name) {
    //         error.name = 'Required'
    //     }else if (value.name.length > 5) {
    //         error.name = 'Exceeding Max length 5'
    //     }
    //     if (!value.food) {
    //         error.food = 'Required'
    //     }
    //     // console.log(error);
    //     return error
    // }
    /**
     * latest js feature allows to create object below syntax if key value have same name 
     */
    const validations = Yup.object({
        name: Yup.string().min(2).max(4,"Address must be more than 4 characters long").required('Required!!!'),
        food: Yup.string().required('Required')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: validations
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} validationSchema={formik.validations}>
             
                 <div className="form-group py-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control " id="name" placeholder="Enter Name" {...formik.getFieldProps('name')} />{/*  by using  spread opertator with formik getfeildProps we can eliminate fe lines of code */}
                    {formik.touched.name && formik.errors.name && <div className='text-danger'>
                        {formik.errors.name}
                    </div> 
                    }
                </div>
                <div className="form-group py-2">
                    <label htmlFor="food">Food</label>
                    <input type="text" className="form-control " id="food" placeholder="Fav. Food" onChange={formik.handleChange} value={formik.values.food} onBlur={formik.handleBlur} />
                    {formik.touched.food && formik.errors.food && <div className='text-danger'>
                        {formik.errors.food}
                    </div>
                    }               </div>
                <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </>
    )
}





export default Formik
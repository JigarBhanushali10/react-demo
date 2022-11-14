import React, { useEffect, useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModelPopUp from '../shared/components/ModelPopUp'


import empServices from '../shared/services/empService';

/**
 * @name EmployeeList
 * @returns Jsx element list
 */

function EmployeeList() {
    /**
     * @name navigate 
     * @descrption to use navigation  feature of react router
     */
    const navigate = useNavigate();

    /**
     * @name employeeList,setEmployeeList
     * @desc: employeeList for employee List , setEmployeeList to set data to employeeList
     */
    const [employeeList, setEmployeeList] = useState([])

    /**
     * @name getEmployees
     * @description method to call get getEmployees form empService and set data to employeeList 
     */
    const getEmployees = async () => {
        // const response = await empServices.getEmployees()
        // const data = await response.data
        empServices.getEmployees().then(res=>setEmployeeList(res.data))
        // setEmployeeList(data)
    }

    /**
     * @name deleteEmployee
     * @param id
     * @description method to call delete deleteEmployee form empService and  call getEmployee again
     */
   
    const deleteEmployee = (id) => {
        setIdToDelete(id)
        setModelText('Do you want to delete Employee?')
        setshowModel(!showModel)
    }



    /**
     * @name editEmployee
     * @param id
     * @description method to call edit getEmployeeById form empService and navigate to form
     */
    const editEmployee = (id) => {
        navigate(`/employee/form/${id}`)
    }

    useEffect(() => {
        getEmployees()
    }, [])


    const [showModel, setshowModel] = useState(false)
    const [modelText, setModelText] = useState('')
    const [idToDelete, setIdToDelete] = useState(-1)

    const onClose = (...val) => {
        if (val[0] === 'OK') {
            empServices.deleteEmployee(idToDelete).then(() => getEmployees())
            setshowModel(!showModel)
        }
        else if (val[0] === 'close') {
            setshowModel(!val)
        }
    }

    return (
        <>
            {
                showModel &&
                <ModelPopUp closeModel={onClose} showModel={showModel} type={'confirm'}>
                    {modelText}
                </ModelPopUp>
            }
            <Link to='/employee/form' className='btn btn-outline-secondary float-end my-3'>Add Employee</Link>
            <table className="table fs-5 w-100">
                <thead className='position-sticky top-0 bg-light'>
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col" className='text-center'>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.length < 1 &&
                        <tr >
                            <td colSpan={4} className='text-center'>
                                <h3>
                                    No record found
                                </h3>
                            </td>
                        </tr>
                    }
                    {employeeList.map(item => <tr key={item['id']} >
                        <td>
                            {item['id']}
                        </td>
                        <td>
                            {item['name']}
                        </td>
                        <td>
                            {item['email']}
                        </td>
                        <td className='d-flex justify-content-center'>
                            <button className='btn btn-warning mx-3' onClick={() => editEmployee(item['id'])}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteEmployee(item['id'])}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default memo(EmployeeList)
import axios from "axios";

const baseUrl = 'http://localhost:3000/'

/**
 * @name getEmployee
 * @description service to get Employee
 * @returns json data
 */
const getEmployees = () => axios.get(`${baseUrl}employee`)
/**
 * @name getUserById
 * @description service to get User by id
 * @returns json data
 */
const getEmployeeById = (id) => axios.get(`${baseUrl}employee/${id}`)
/**
 * @name addEmployee
 * @description service to add Employee
 */
const addEmployee = (Employee) => axios.post(`${baseUrl}employee`, Employee)
/**
 * @name updateEmployee
 * @description service to update Employee
 */
const updateEmployee = (id, data) => axios.put(`${baseUrl}employee/${id}`, data)
/**
 * @name deleteEmployee
 * @description service to delete Employee
 */
const deleteEmployee = (id) => axios.delete(`${baseUrl}employee/${id}`)


const empServices = {
    getEmployees,
    addEmployee,
    updateEmployee,
    getEmployeeById,
    deleteEmployee
}

export default empServices
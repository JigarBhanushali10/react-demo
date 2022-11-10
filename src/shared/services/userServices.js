import axios from "axios";

const baseUrl = 'http://localhost:3000/'

/**
 * @name getUsers
 * @description service to get Users
 * @returns json data
 */
const getUsers = () => axios.get(`${baseUrl}admin`)
/**
 * @name getUserById
 * @description service to get User by id
 * @returns json data
 */
const getUserById = (id) => axios.get(`${baseUrl}admin/${id}`)
/**
 * @name addUser
 * @description service to add Users
 */
const addUser = (user) => axios.post(`${baseUrl}admin`, user)
/**
 * @name updateUser
 * @description service to update Users
 */
const updateUser = (id, user) => axios.put(`${baseUrl}admin/${id}`, user)
/**
 * @name delteUser
 * @description service to delete Users
 */
const deleteUser = (id) => axios.delete(`${baseUrl}admin/${id}`)


const httpServices = {
    getUsers,
    addUser,
    updateUser,
    getUserById,
    deleteUser
}

export default httpServices
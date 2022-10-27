import axios from "axios";


const baseUrl = 'http://localhost:3000/'

/**
 * @name getUsers
 * @description service to get Users
 * @returns json data
 */
const getUsers = ()=>axios.get(`${baseUrl}admin`)
/**
 * @name addUser
 * @description service to add Users
 */
const addUser = (user)=>axios.post(`${baseUrl}admin`,user)

const httpServices={
    
    getUsers,
    addUser
}

export default httpServices

import React from 'react';
import httpServices from '../shared/services/userServices';
import fb from '../assets/videos/footballV1.mp4'

const loginImage = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"

class Resgister extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        toggleList: true,
        users: [],
        pageTitle: 'Add User',
        idToEdit: 0
    }

    /**
     * @name handleMultipleInputChange
     * @param event 
     * @descripton : handles multiple inputs from user
     */
    handleMultipleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /**
     * @name getUsers 
     * @description method to get users data and set state by calling service
     */
    getUsers() {
        httpServices.getUsers().then(response => this.setState({ users: response.data })
        )
    }
    /**
     * @name onSubmit
     * @description submits user data to json server using axios
     */
    onSubmit = () => {
        const user = {}
        user.firstName = this.state.firstName
        user.lastName = this.state.lastName
        user.email = this.state.email
        if (this.state.pageTitle == 'Add User') {
            httpServices.addUser(user).then(() => {
                this.getUsers()
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    toggleList: !this.state.toggleList
                });
            }
            );
        } else {

            httpServices.updateUser(this.state.idToEdit, user).then(() => {
                this.getUsers()
                this.setState({
                    lastName: '',
                    email: '',
                    toggleList: !this.state.toggleList, firstName: '',
                })
            }
            )
        }

    }

    /**
     * @name deleteUser 
     * @description method to delete user by calling service
     * @param id 
     */
    deleteUser = (id) => {
        httpServices.deleteUser(id).then(res => this.getUsers())
    }
    /**
     * @name resetFrom
     * @description method to reset form
     */
    resetFrom = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
        });
    };



    componentDidMount() {
        this.getUsers()
    }

    /**
     * @name updateDetails
     * @param  id 
     * @description calls getUserById method to get user details to patch in input fields
     */

    updateDetails = (id) => {
        httpServices.getUserById(id).then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                idToEdit: res.data.id
            });
            this.getUsers()
            this.setState({ toggleList: !this.state.toggleList, pageTitle: 'Update User' })
        })

    }
    handleAddUser = () => {
        this.getUsers()
        this.setState({ toggleList: !this.state.toggleList, pageTitle: 'Add User' })
    }

    handleListView = () => {
        this.setState({ toggleList: !this.state.toggleList })
        this.getUsers()
    }

    render() {
        return (
            <div className="container h-100 overflow-hidden">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" >
                            <div className="card-body p-md-5">

                                {

                                    this.state.toggleList &&
                                    <div className="row justify-content-center">

                                        <div className=" d-flex align-items-center order-1 order-lg-2 position-relative">
                                            <div className='position-absolute my-4 mx-3   bg-opacity-50 rounded-3' style={{zIndex:10}} >
                                                <div className=" order-2 order-lg-1">

                                                    <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">{this.state.pageTitle}</p>

                                                    <form className="mx-1 mx-md-4">

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="text" id="firstName" placeholder='First Name' className="form-control" value={this.state.firstName} name='firstName' onChange={this.handleMultipleInputChange} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="text" id="lastName" placeholder='Last Name' className="form-control" value={this.state.lastName} name='lastName' onChange={this.handleMultipleInputChange} />
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input type="email" id="email" placeholder='Email' className="form-control" value={this.state.email} name='email' onChange={this.handleMultipleInputChange} />
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-around mx-4 mb-3 mb-lg-4">
                                                            <button type="button" className="btn btn-success btn-lg" onClick={this.onSubmit}>{this.state.pageTitle}</button>
                                                            <button type="button" className="btn btn-secondary btn-lg mx-2" onClick={this.handleListView}>Go to List</button>
                                                        </div>

                                                    </form>

                                                </div>
                                            </div>
                                            <video className='w-100 ' loop autoPlay >
                                                <source src={fb} type="video/mp4" />
                                                Your browser does not support HTML video.
                                            </video>


                                            {/* <img src={loginImage}
                                                className="img-fluid" alt="Sample image" /> */}

                                        </div>
                                    </div>
                                }
                                {
                                    !this.state.toggleList && <div className='oveflow-hidden my-3' >
                                        <div>

                                            <button className=' btn btn-secondary ' onClick={this.handleAddUser}>Add User</button>
                                        </div>

                                        {/* user List */}
                                        <div className='overflow-auto  ' style={{ height: 500 }}>

                                            <table className="table fs-5 w-100">
                                                <thead className='position-sticky top-0 bg-light'>
                                                    <tr>
                                                        <th scope="col">Sr no.</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col" className='text-center'>actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.users.length < 1 &&
                                                        <tr>    <td colSpan={4} className='text-center'>
                                                            <h3>
                                                                No record found
                                                            </h3>
                                                        </td></tr>}
                                                    {this.state.users.map(item => <tr key={item['id']} >
                                                        <td>
                                                            {item['id']}
                                                        </td>
                                                        <td>
                                                            {item['firstName'] + item['lastName']}
                                                        </td>
                                                        <td>
                                                            {item['email']}
                                                        </td>
                                                        <td className='d-flex justify-content-center'>
                                                            <button className='btn btn-warning mx-3' onClick={() => this.updateDetails(item['id'])}>Edit</button>
                                                            <button className='btn btn-danger' onClick={() => this.deleteUser(item['id'])}>Delete</button>
                                                        </td>
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resgister;

import React from 'react'
import httpServices from '../services/services.ts';

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
                this.setState({ toggleList: !this.state.toggleList })
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: ''
                });
            }
            );
        } else {

            httpServices.updateUser(this.state.idToEdit, user).then(() => {
                this.setState({
                    toggleList: !this.state.toggleList, firstName: '',
                    lastName: '',
                    email: ''
                })
            }
            )
        }
        this.getUsers()

    }
    deleteUser = (id) => {
        httpServices.deleteUser(id).then(res => this.getUsers())
    }

    componentDidMount() {
        // if (this.state.email == '') {
        //     this.setState.pageTitle = "Add User"
        // }
        this.getUsers()
    }

    updateDetails = (id) => {
        httpServices.getUserById(id).then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                idToEdit: res.data.id
            });
            this.setState({ toggleList: !this.state.toggleList, pageTitle: 'Update User' })
        })

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
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{this.state.pageTitle}</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label fs-5 float-start" htmlFor="firstName">Your First Name</label>
                                                        <input type="text" id="firstName" className="form-control" value={this.state.firstName} name='firstName' onChange={this.handleMultipleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label fs-5 float-start" htmlFor="lastName">Your Last Name</label>
                                                        <input type="text" id="lastName" className="form-control" value={this.state.lastName} name='lastName' onChange={this.handleMultipleInputChange} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label fs-5 float-start" htmlFor="email">Your Email</label>
                                                        <input type="email" id="email" className="form-control" value={this.state.email} name='email' onChange={this.handleMultipleInputChange} />
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-success btn-lg" onClick={this.onSubmit}>{this.state.pageTitle}</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={loginImage}
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                }
                                {
                                    !this.state.toggleList && <div className='oveflow-hidden my-3' >
                                        <div>

                                            <button className=' btn btn-secondary ' onClick={() => this.setState({ toggleList: !this.state.toggleList, pageTitle: 'Add User' })}>Add User</button>
                                        </div>

                                        {/* user List */}
                                        <div className='overflow-auto  ' style={{height:500}}>

                                            <table className="table fs-5">
                                                <thead className='position-sticky top-0 bg-light'>
                                                    <tr>
                                                        <th scope="col">Sr no.</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
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
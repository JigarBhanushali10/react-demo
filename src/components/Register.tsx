
import React from 'react'
import httpServices from '../services/services.ts';

interface ResgisterProps {

}

interface ResgisterState {

}
const loginImage = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"

class Resgister extends React.Component<ResgisterProps, ResgisterState> {
    state = {
        user: {},
        firstName: '',
        lastName: '',
        email: ''
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
     * @name onSubmit
     * @description submits user data to json server using axios
     */
    onSubmit = () => {
        const user: any = {}
        user.firstName = this.state.firstName
        user.lastName = this.state.lastName
        user.email = this.state.email
        console.log(user);
        httpServices.addUser(user).then(response => console.log(response.data)
        );

    }

    render() {
        return (<div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" >
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <form className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label fs-5 float-start" htmlFor="firstName">Your First Name</label>
                                                <input type="text" id="firstName" className="form-control" name='firstName' onChange={this.handleMultipleInputChange} />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label fs-5 float-start" htmlFor="lastName">Your Last Name</label>
                                                <input type="text" id="lastName" className="form-control" name='lastName' onChange={this.handleMultipleInputChange} />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label fs-5 float-start" htmlFor="email">Your Email</label>
                                                <input type="email" id="email" className="form-control" name='email' onChange={this.handleMultipleInputChange} />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-success btn-lg" onClick={this.onSubmit}>Submit</button>
                                        </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src={loginImage}
                                        className="img-fluid" alt="Sample image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Resgister;
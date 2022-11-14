import axios from "axios";
import React from 'react';


/**
 * axious interceptor
 */
// todo Done make function and use as selector in app.jsx 
// todo review it once again 

const AuthInterceptor = (props) => {
    // console.log(props.method);
    const { method } = props

    axios.interceptors.request.use(request => {
        // console.log('request', request);
        request.headers.AccessToken = ' Jigar1234'
        method(true)
        return request
    })

    axios.interceptors.response.use(response => {
        // debugger
        // console.log('response', response);
        method(false)
        return response
    },
    (error) => {
        const status  = error?.response?.status;
        switch (status) {
            case 400:
                console.log(error.response);
                break;
            case 401:
                console.log("Unauthorized");
                break;
            case 404:
                console.log(error.response?.status);
                break;
            case 500:
                console.log("server error");
                break;
            default:
                console.log("an unknown error occurred");
                break;
        }
        return error
    })

    return <>
        {props.children}
    </>
}

export default AuthInterceptor


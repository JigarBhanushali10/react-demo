import axios from "axios";
import React from 'react'


/**
 * axious interceptor
 */
// todo Done make function and use as selector in app.jsx 
// todo review it once again 

const AuthInterceptor = (props) => {

    axios.interceptors.request.use(request => {
        // console.log('request', request);
        request.headers.AccessToken = ' Jigar1234'
        return request
    })

    axios.interceptors.response.use(response => {
        // debugger
        // console.log('response', response);
        return response
    })

    return <>
        {props.children}
    </>
}

export default AuthInterceptor


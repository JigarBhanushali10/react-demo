import axios from "axios";
import React, { useState } from 'react'


/**
 * axious interceptor
 */
// todo Done make function and use as selector in app.jsx 
// todo review it once again 

const AuthInterceptor = (props) => {
    // console.log(props.method);
    const { method } = props
    const [loader, setloader] = useState(false)

    axios.interceptors.request.use(request => {
        // console.log('request', request);
        request.headers.AccessToken = ' Jigar1234'
        setloader(true)
        method(true)
        return request
    })
    
    axios.interceptors.response.use(response => {
        // debugger
        // console.log('response', response);
        setloader(false)
        method(false)
        return response
    })

    return <>
        {props.children}
    </>
}

export default AuthInterceptor


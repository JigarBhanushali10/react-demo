import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Loader.css'




const Loader = () => {
    const loader = document.getElementById('loader')


    return ReactDOM.createPortal(
        <div
            className='position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-25 d-grid'
        >
            <div

                className='justify-content-center m-1 d-flex flex-column rounded-3 p-4  position-relative'
            >
                <div  class="spinner fs-1"><span></span></div>
            </div>
        </div>,
        loader,
    )
}


export default Loader

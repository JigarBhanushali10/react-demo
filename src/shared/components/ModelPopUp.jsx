import React, { useState } from 'react'
import ReactDOM from 'react-dom'




 const ModelPopUp = (props) => {
    const modalRoot = document.getElementById('modal-root')
    const [value, setValue] = useState('')

    if(props.type){
        setTimeout(() => {
            
        }, 1500);
    }
    return ReactDOM.createPortal(
        <div
            // onClick={() => props.closeModel(!props.showModel)}
            className='position-absolute top-0 end-0 start-0 bottom-0 justify-content-center align-items-center bg-dark bg-opacity-25 d-grid'
        >
            <div
                style={{
                    // minHeight: '300px',
                    minWidth: '300px',
                    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                }}
                className='justify-content-center m-1 d-flex flex-column rounded-3 p-4 bg-white position-relative'
            >
                {props.children}
                <hr className='py-2'/>
                {props.type === 'prompt' &&
                    <div>
                        <label htmlFor="value">Enter Value:</label><input htmlFor='value' type="text" className='w-100' name='value'  onChange={(val)=>{setValue(val.target.value);console.log(value)}} />
                    </div>
                }
                <div className='flex-grow-1 position-relative'>
                    <div className='d-flex justify-content-end'>

                        {props.type === 'success' &&
                            <button className='btn btn-success  px-4' onClick={() => props.closeModel( 'close')}>OK</button>
                        }
                        {props.type === 'alert' &&
                            <button className='btn btn-success  px-4' onClick={() => props.closeModel( 'close')}>OK</button>
                        }
                        {props.type === 'confirm' &&
                            <div>
                                <button className='btn btn-success mx-3 px-4' onClick={() => props.closeModel( 'OK')}>OK</button>
                                <button className='btn btn-danger px-4' onClick={() => props.closeModel( 'close')}>Close</button>
                            </div>
                        }
                        {props.type === 'prompt' &&
                            <div>
                                <button className='btn btn-success mx-3 px-4' onClick={() => props.closeModel('OK',value)}>OK</button>
                                <button className='btn btn-danger px-4' onClick={() => props.closeModel('close')}>Close</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>,
        modalRoot,
    )
}


export default ModelPopUp

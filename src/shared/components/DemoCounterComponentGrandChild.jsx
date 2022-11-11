import React, { useState, useImperativeHandle, forwardRef, useContext } from 'react';
import { ReactContext } from './ReactContext';

const DemoCounterComponentGrandChild = forwardRef((props, ref) => {
    const [counter, setCounter] = useState(0)
    const [text, settext] = useState('')
    const { increamentCounter, decreamentCounter } = useContext(ReactContext)
    // useImperativeHandle for forwarding ref to parent component

    useImperativeHandle(ref, () => ({
        increamentGrandChildCounter,
        decreamentGrandChildCounter
    }))

    //grandChild's own methods to increament and decreament counter 

    const increamentGrandChildCounter = (val) => {
        settext(val)

        setCounter(prevState => prevState + 1)
    }
    const decreamentGrandChildCounter = (val) => {
        settext(val)
        setCounter(prevState => prevState - 1)
    }




    return <div className=' border p-3 m-3'>
        <h3>
            {props.name}
        </h3>
        <h4 className='text-center'>
            {props.name} Counter {text}: {counter}
        </h4>
        <div className='d-flex justify-content-evenly '>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Parent Conter  */}
                <small className='d-block p-2'>
                    Using Context
                </small>
                <button className='btn btn-info' onClick={() => increamentCounter('Incremented from Grand Child')}>Parent Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentCounter('Decremented from Grand Child')}>Parent Decreament</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Parent Conter  */}
                <small className='d-block p-2'>
                    Using Method as Props
                </small>
                <button className='btn btn-info' onClick={() => props.increamentCounterMethodAsProps('Incremented from Grand Child')}>  Parent Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentCounterMethodAsProps('Decremented from Grand Child')}>Parent Decreament</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Child Conter  */}
                <small className='d-block p-2'>
                    Using Method as Props
                </small>
                <button className='btn btn-info' onClick={() => props.increamentChildCounterMethodAsProps('Incremented from Grand Child')}>Child Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentChildCounterMethodAsProps('Decremented from Grand Child')}>Child Decreament</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper grandChild Conter  */}
                <small className='d-block p-2'>
                    Own Methods
                </small>

                <button className='btn btn-info' onClick={() => increamentGrandChildCounter('Incremented from Grand Child')}>GrandChild Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentGrandChildCounter('Decremented from Grand Child')}>GrandChild Decreament</button>
            </div>
        </div>
        {props.children}
    </div>
})

export default DemoCounterComponentGrandChild
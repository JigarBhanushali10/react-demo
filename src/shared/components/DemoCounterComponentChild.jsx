import React, { forwardRef, useState, useImperativeHandle } from 'react';

const DemoCounterComponentChild = forwardRef((props, ref) => {
    // useImperativeHandle for forwarding ref to parent component
    useImperativeHandle(ref, () => ({
        increamentChildCounter,
        decreamentChildCounter
    }))

    const [counter, setCounter] = useState(0)
    const [text, settext] = useState('')

    //child's own methods to increament and decreament counter 

    const increamentChildCounter = (val) => {
        settext(val)
        setCounter(prevState => prevState + 1)
    }
    const decreamentChildCounter = (val) => {
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
                    Using Method as Props
                </small>
                <button className='btn btn-info' onClick={() => props.increamentCounterMethodAsProps('Incremented from Child')}>Parent Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentCounterMethodAsProps('Decremented from Child')}>Parent Decreament</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Child Conter  */}
                <small className='d-block p-2'>
                    Own Methods
                </small>

                <button className='btn btn-info' onClick={() => increamentChildCounter('Incremented from Child')}>Child Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentChildCounter('Decremented from Child')}>Child Decreament</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper grandChild Conter  */}
                <small className='d-block p-2'>
                    Using Method as Props
                </small>
                <button className='btn btn-info' onClick={() => props.increamentGrandChildCounterMethodAsProps('Incremented from Child')}>GrandChild Increament</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentGrandChildCounterMethodAsProps('Decremented from Child')}>GrandChild Decreament</button>
            </div>
        </div>
        {props.children}
    </div>
})

export default DemoCounterComponentChild
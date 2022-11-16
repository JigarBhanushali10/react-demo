import React, { useState, useImperativeHandle, forwardRef, useContext } from 'react';
import { ReactContext } from './ReactContext';

const DemoCounterComponentGrandChild = forwardRef((props, ref) => {
    const [counter, setCounter] = useState(0)
    const { increamentCounter, decreamentCounter } = useContext(ReactContext)
    // useImperativeHandle for forwarding ref to parent component

    useImperativeHandle(ref, () => ({
        increamentGrandChildCounter,
        decreamentGrandChildCounter
    }))

    //grandChild's own methods to increament and decreament counter 

    const increamentGrandChildCounter = (val) => {
        console.log(val);

        setCounter(prevState => prevState + 1)
    }
    const decreamentGrandChildCounter = (val) => {
        console.log(val);
        setCounter(prevState => prevState - 1)
    }




    return <div className=' border p-3 m-3'>
        <h3>
            {props.name}
        </h3>
        <h4 className='text-center'>
            {props.name} Counter : {counter}
        </h4>
        <div className='d-flex justify-content-evenly '>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Parent Conter  */}
                <small className='d-block p-2'>
                    Using Context
                </small>
                Parent
                <button className='btn btn-info mx-1' onClick={() => increamentCounter('Incremented from Grand Child')}>+</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentCounter('Decremented from Grand Child')}>-</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Parent Conter  */}
                <small className='d-block p-2'>
                    Using Method as Props
                </small>
                Parent
                <button className='btn btn-info mx-1' onClick={() => props.increamentCounterMethodAsProps('Incremented from Grand Child')}>   +</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentCounterMethodAsProps('Decremented from Grand Child')}>-</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Child Conter  */}
                <small className='d-block p-2'>
                    Using Method as Props
                </small>
                Child
                <button className='btn btn-info mx-1' onClick={() => props.increamentChildCounterMethodAsProps('Incremented from Grand Child')}>+</button>
                <button className='btn btn-danger mx-1' onClick={() => props.decreamentChildCounterMethodAsProps('Decremented from Grand Child')}>-</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper grandChild Conter  */}
                <small className='d-block p-2'>
                    Own Methods
                </small>
                GrandChild
                <button className='btn btn-info mx-1' onClick={() => increamentGrandChildCounter('Incremented from Grand Child')}>+</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentGrandChildCounter('Decremented from Grand Child')}>-</button>
            </div>
        </div>
        {props.children}
    </div>
})

export default DemoCounterComponentGrandChild
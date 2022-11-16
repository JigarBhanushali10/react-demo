import React, { useState, useRef } from 'react';
import DemoCounterComponentChild from './DemoCounterComponentChild';
import DemoCounterComponentGrandChild from './DemoCounterComponentGrandChild';
import { Provider } from './ReactContext';

const DemoCounterComponentParent = (props) => {
    const [counter, setCounter] = useState(0)

    const childRef = useRef()
    const grandChildRef = useRef()

    //parents own methods to increament and decreament counter 

    const increamentCounter = (val) => {
        if (val) {
            console.log(val);
        }
        setCounter(prevState => prevState + 1)
    }

    const decreamentCounter = (val) => {
        if (val) {
            console.log(val);
        }
        setCounter(prevState => prevState - 1)
    }
    //child methods to increament and decreament counter using useRef 
    const increamentChildCounter = (val) => {
        childRef.current.increamentChildCounter(val)
    }
    const decreamentChildCounter = (val) => {
        childRef.current.decreamentChildCounter(val)
    }
    //grandChild methods to increament and decreament counter using useRef 
    const increamentGrandChildCounter = (val) => {
        grandChildRef.current.increamentGrandChildCounter(val)
        // grandChildRef.current.
    }
    const decreamentGrandChildCounter = (val) => {
        grandChildRef.current.decreamentGrandChildCounter(val)
    }

    return <div className=' border p-3 m-3'>
        <h3>
            {props.name}
        </h3>
        <h4 className='text-center'>
            {props.name} Counter  : {counter}
        </h4>
        <div className='d-flex justify-content-evenly '>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Parent Conter  */}
                <small className='d-block p-2'>
                    Own Methods
                </small>
                Parent
                <button className='btn btn-info mx-1' onClick={() => increamentCounter('Increament Form Parent')}> +</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentCounter('Decreament Form Parent')}>-</button>
            </div>
            <div className='border p-1 m-1'>
                {/* Buttons to temper Child Conter  */}
                <small className='d-block p-2'>
                    Using useRef
                </small>
                Child
                <button className='btn btn-info mx-1' onClick={() => increamentChildCounter('Increament Form Parent')} >+</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentChildCounter('Decreament Form Parent')}>-</button>
            </div>
            <div className='border p-1 m-1'>
                <small className='d-block p-2'>
                    Using useRef
                </small>
                {/* Buttons to temper grandChild Conter  */}
                GrandChild
                <button className='btn btn-info mx-1' onClick={() => increamentGrandChildCounter('Increament Form Parent')}>+</button>
                <button className='btn btn-danger mx-1' onClick={() => decreamentGrandChildCounter('Decreament Form Parent')}>-</button>
            </div>
        </div>

        {/* passing increament and decreament Counter Method As Props so it can be used to trigger method from child */}
        <Provider value={{ increamentCounter,decreamentCounter }}>
            <DemoCounterComponentChild ref={childRef} name='Child' increamentCounterMethodAsProps={increamentCounter} decreamentCounterMethodAsProps={decreamentCounter} increamentGrandChildCounterMethodAsProps={increamentGrandChildCounter} decreamentGrandChildCounterMethodAsProps={decreamentGrandChildCounter} >
                {/* passing increament and decreament Counter Method As Props so it can be used to trigger method from grandChild */}
                <DemoCounterComponentGrandChild ref={grandChildRef} name='GrandChild' increamentCounterMethodAsProps={increamentCounter} decreamentCounterMethodAsProps={decreamentCounter} increamentChildCounterMethodAsProps={increamentChildCounter} decreamentChildCounterMethodAsProps={decreamentChildCounter}>

                </DemoCounterComponentGrandChild>
            </DemoCounterComponentChild>

           
        </Provider>
    </div>
}

export default DemoCounterComponentParent
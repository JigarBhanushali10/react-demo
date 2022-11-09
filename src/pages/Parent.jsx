import React, { useRef, useState } from 'react';


import hocComponent from '../shared/components/HOC';
// import { styled } from 'styled-components'
import Child from '../components/Child';
import GrandChild from '../components/GrandChild';
import PureClassComponent from '../components/PureClassComponent';
import { Provider } from '../shared/components/ReactContext';



const Parent = (props) => {
    const [text, setText] = useState('')
    const [id, setId] = useState('')
    const grandChildRef = useRef(null)
    console.log('grandChildRef', grandChildRef);

    /**
     * @name componentDidMount
     * @Warning only uncomment to show useMemo and PureComponent 
     */
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({ text: 'Jigar' })
    //     }, 2000)
    // }


    //method to increament count
    const increament = () => {
        setId(id + 1)
        setText('Incremeant count from grandChild')
    }
    const handleStateInGrandChild = () => {
        console.log(grandChildRef);
        grandChildRef.current.state.increamentGrandChildCounter()
    }

    //method to decreament count
    const decreament = (value) => {
        setText(value)
        setId(id - 1)
    }


    console.log('---------------------------Parent----------------------------');
    console.log(props);

    return (
        <div className='border border-success p-4 h-100'>
            {/* <NestingExample></NestingExample> */}
            Parent
            {/* <button onClick={this.increament} title='click to change text' className=' btn btn-info m-3 '>click to incremeant count from parent</button> */}
            {/* <button onClick={handleStateInGrandChild}>using ref to chnage state in grand child</button> */}

            <Provider value='Hi from parent using react context'>

                <Child pooja="female" methodAsProps={decreament} >
                    <GrandChild methodAsProps={increament} counter={id} ref={grandChildRef}>
                        {/* <button onClick={this.increament} title='click to change text' className=' btn btn-info m-3 '>click to incremeant count from GrandChild</button> */}
                    </GrandChild>
                </Child>
            </Provider>
            <PureClassComponent />
            <span>
                {text}
                <h3 className='d-inline px-2'>
                    Counter:{id}
                </h3>
            </span>
        </div>
    )
}


export default hocComponent(Parent);



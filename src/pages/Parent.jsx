import React from 'react';
import hocComponent from '../shared/components/HOC';
// import { styled } from 'styled-components'
import {
    Link, Route, Routes, useLocation, useParams, Outlet
} from "react-router-dom";
import Child from '../components/Child';
import { Provider } from '../shared/components/ReactContext';
import PureClassComponent from '../components/PureClassComponent';



class Parent extends React.Component {

    state = {
        text: ``,
        id: 1
    }

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
    increament = () => {
        this.setState({ text: this.state.text = 'Incremeant count from parent', id: this.state.id + 1 })
    }

    //method to decreament count
    decreament = (value) => {
        this.setState({ text: this.state.text = value, id: this.state.id - 1 })
    }

    render() {
        console.log('---------------------------Parent----------------------------');
        console.log(this.props);

        return (
            <div className='border border-success p-4 h-100'>
                {/* <NestingExample></NestingExample> */}
                Parent
                <button onClick={this.increament} title='click to change text' className=' btn btn-info m-3 '>click to incremeant count from parent</button>
                <Provider value='Hi from parent using react context'>

                    <Child pooja="female" methodAsProps={this.decreament} >
                        children from parent component
                    </Child>
                </Provider>
                <PureClassComponent />
                <span>
                    {this.state.text}
                    <h3 className='d-inline px-2'>
                        Counter:{this.state.id}
                    </h3>
                </span>
            </div>
        )
    }
}





export default hocComponent(Parent);



import React, { Component } from 'react';
import { Consumer } from '../shared/components/ReactContext';



class GrandChild extends Component {
    state = {
        name: "GrandChild",
        grandChildCounter: 0,

        increamentGrandChildCounter: () => {
            this.setState({ grandChildCounter: this.state.grandChildCounter + 1 },)
        }
    }
    constructor(props) {
        super(props);
    }

    // increamentGrandChildCounter() {
    //     this.setState({ grandChildCounter: this.state.grandChildCounter + 1 },)
    // }

    decreamentGrandChildCounter() {
        this.setState({ grandChildCounter: this.state.grandChildCounter - 1 },)
    }


    render() {

        console.log('------------------Grand-Child----------------------');
        console.log(this.props);

        return (<div className='border border-secondary p-3'>
            GrandChild:
            {/* context */}
            <Consumer>
                {
                    value => {
                        console.log(value);
                        return <div>
                            {value}
                        </div>
                    }
                }

            </Consumer>

            {/* <button onClick={this.state.increamentGrandChildCounter}>aslfnas</button> */}
            <button onClick={this.props.methodAsProps} title='click to change text' className=' btn btn-info m-3 '>click to incremeant count from GrandChild</button>

            {this.props.children}
            <br></br>
            this data is from parent:{this.props.counter}
            <br></br>
            {/* this data is own data (grandChild) :{this.state.grandChildCounter} */}
        </div>)
    }
}


export default GrandChild;
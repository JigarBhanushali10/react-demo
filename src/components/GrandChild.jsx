import React, { Component } from 'react';
import { Consumer } from '../shared/components/ReactContext';



class GrandChild extends Component {
    state = {
        name: "GrandChild"

    }
    // constructor(props) {
    //     super(props);
    // }
    render() {

        console.log(this.props);

        return (<div className='border border-secondary p-3'>
            GrandChild:
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
        </div>)
    }
}


export default GrandChild;
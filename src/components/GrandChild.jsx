import React, { Component } from 'react'
import { Consumer } from './ReactContext';



class GrandChild extends Component {
    state = {
        name: "GrandChild"

    }
    constructor(props) {
        super(props);
    }
    render() {

        console.log(this.props);

        return (<div style={{border:'1px solid purple'}}>
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
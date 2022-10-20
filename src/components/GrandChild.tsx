import React, { Component } from 'react'
import { Consumer } from './ReactContext';



class GrandChild extends Component {
    state = {
        name: "GrandChild"

    }
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }
    render() {

        console.log(this.props);

        return (<div>
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
import React from 'react'
import { Child } from './Child'
import hocComponent from './HOC'
// import { styled } from 'styled-components'


interface ParentProps {
}
interface ParentState {

}
class Parent extends React.Component<ParentProps, ParentState> {
    newText = "World"
    state = {
        text: `Hello ${this.newText}`,
        id: 1
    }

    jigar = () => {
        this.setState({ text: this.state.text = 'Jigar', id: this.state.id + 1 })
    }

    helloWorld = (value?: any) => {
        console.log(value);

        this.setState({ text: this.state.text = 'Changed from child', id: this.state.id - 1 })
    }

    render() {
        console.log(this.state.id);
        console.log(this.props);

        return (
           <>
                <Child  pooja="female" methodAsProps={this.helloWorld}>
                    children from parent component
                </Child>
                <h1 onClick={this.jigar}>{this.state.text}</h1>
           </>
            )
    }
}

export default hocComponent(Parent);



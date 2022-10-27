import React from 'react'
import { Child } from './Child.jsx'
import hocComponent from './HOC.jsx'
// import { styled } from 'styled-components'



class Parent extends React.Component {
    newText = "World"
    state = {
        text: `Hello ${this.newText}`,
        id: 1
    }

    jigar = () => {
        this.setState({ text: this.state.text = 'Jigar', id: this.state.id + 1 })
    }

    helloWorld = (value) => {
        console.log(value);

        this.setState({ text: this.state.text = 'Changed from child', id: this.state.id - 1 })
    }

    render() {
        console.log(this.state.id);
        console.log(this.props);

        return (
            <>
                <Child pooja="female" methodAsProps={this.helloWorld}>
                    children from parent component
                </Child>
                <h1 onClick={this.jigar}>{this.state.text}</h1>
            </>
        )
    }
}

export default hocComponent(Parent);



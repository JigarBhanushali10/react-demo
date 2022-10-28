import React from 'react';
import hocComponent from './HOC.jsx';
// import { styled } from 'styled-components'
import {
    Link, Route, Routes, useParams, useLocation
} from "react-router-dom";
import { Child } from './Child.jsx';
import { Provider } from './ReactContext.jsx';



class Parent extends React.Component {
    newText = "World"
    state = {
        text: `Click to increase counter from parent`,
        id: 1
    }

    increament = () => {
        this.setState({ text: this.state.text = 'Incremeant count from parent', id: this.state.id + 1 })
    }

    decreament = (value) => {
        this.setState({ text: this.state.text = value, id: this.state.id - 1 })
    }

    render() {
        console.log(this.state.id);
        console.log(this.props);

        return (
            <div style={{ border: '1px solid green', padding: 8, }}>
                {/* <NestingExample></NestingExample> */}
                Parent
                <Topics></Topics>
                <button onClick={this.increament} title='click to change text' style={{ margin: 8 }}>click to incremeant count from parent</button>
                <Provider value='Hi from parent using react context'>

                    <Child pooja="female" methodAsProps={this.decreament} >
                        children from parent component
                    </Child>
                </Provider>
<span>
{this.state.text}
<h1 className='d-inline'>
                Counter:{this.state.id}
</h1>
</span>
            </div>
        )
    }
}

function Topics() {
    const { pathname } = useLocation();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${pathname.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${pathname.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>


            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Routes>
                <Route path={`${pathname.path}`} element={<Topic />} >
                    {/* <Topic /> */}
                </Route>
                <Route path={pathname.path}>
                    {/* <h3>Please select a topic.</h3> */}
                </Route>
            </Routes>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}


export default hocComponent(Parent);



import React from 'react';

export default (WrappedComponent) => {

    const data = {
        funtionInHOC: () => { console.log('sending data from HOC '); }
    }

    const hocComponent = ({ ...props }) => <WrappedComponent {...props} prop='Hi from HOC ' data={data}></WrappedComponent>

    hocComponent.propTypes = {}

    return hocComponent
}

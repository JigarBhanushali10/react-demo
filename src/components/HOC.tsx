import React from 'react';

export default (WrappedComponent: any) => {

    const data={
        inConsole: () => {console.log('sending data from HOC ');}
}

const hocComponent = ({ ...props }) => <WrappedComponent {...props} prop='Hi from HOC ' data={data}></WrappedComponent>

hocComponent.propTypes = {}

return hocComponent
}

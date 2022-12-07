import * as React from 'react';

export const ReactContext = React.createContext()


const Provider = ReactContext.Provider
const Consumer = ReactContext.Consumer

export { Provider, Consumer };

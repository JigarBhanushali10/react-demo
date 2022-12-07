import { useState } from 'react';
import './App.css';
import Master from './core/components/master';
import AuthInterceptor from './core/service/interceptor';
import Loader from './shared/components/Loader';
import { Provider } from './shared/components/ReactContext';


function App() {



  const [loader, setloader] = useState(false)


  return (
    <div className="h-100">
     
        <Provider value={{ setloader }}>
        <AuthInterceptor />
        {loader && <Loader />}
        <Master></Master>
      </Provider>
    </div>
  );
}

export default App;

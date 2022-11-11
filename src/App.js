import './App.css';
import Master from './core/components/master';
import AuthInterceptor from './core/service/interceptor';
import Loader from './shared/components/Loader';
import { useState } from 'react';


function App() {

  const [loader, setloader] = useState(false)
  const showLoader = (val) => {
    setloader(val)
  }

  return (
    <div className="h-100">
      <AuthInterceptor method={showLoader}>
        {loader && <Loader>
        </Loader>}
        <Master></Master>
      </AuthInterceptor>
    </div>
  );
}

export default App;

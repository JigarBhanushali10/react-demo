import './App.css';
import Master from './core/components/master';
import AuthInterceptor from './core/service/interceptor';

function App() {
  return (
    <div className="h-100">
      <AuthInterceptor>
        <Master></Master>
      </AuthInterceptor>
    </div>
  );
}

export default App;

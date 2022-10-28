import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent.jsx'
import Resgister from './components/Register.jsx';
import { Routes, Route,Link } from "react-router-dom"
import { Child } from './components/Child';
import Master from './components/master';

function App() {
  return (
    <div className="App h-100">
      {/* <header className="App-header">
        <Resgister />
      </header> */}
      
     <Master></Master>
      
    </div>
  );
}

export default App;

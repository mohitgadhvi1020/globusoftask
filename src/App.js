import logo from './logo.svg';
// import './App.css';
import {Routes, Route } from 'react-router-dom'
import Maindashboardpage from './Maindashboardpage';
import LoginForm from './components/Login/Login';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<LoginForm />}/>
        <Route exact path="/dashboard" element={<Maindashboardpage />}/>
      </Routes>
  
    
  );
}

export default App;

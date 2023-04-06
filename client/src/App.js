import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
// import Stadium from './components/Stadium';
import SingleStadium from './views/SingleStadium'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/stadiums/:id' element={<SingleStadium/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

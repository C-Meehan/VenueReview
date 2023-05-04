import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SingleStadium from './views/SingleStadium';
import Profile from './components/Profile';
import EditReview from './components/EditReview';
import OthersProfile from './components/OthersProfile';
// import Stadium from './components/Stadium';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/stadiums/:id' element={<SingleStadium/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/profile/others/:id' element={<OthersProfile/>}/>
          <Route path='/review/edit/:id' element={<EditReview/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

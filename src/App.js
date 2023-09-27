import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './login/views/Login';
import User from './components/user';
import Navbar from './common/components/Navbar';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="navbar" element={<Navbar/>}/>
        <Route path="user" element={<User />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

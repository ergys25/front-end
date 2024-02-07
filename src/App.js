import './App.css';
import NavBar from './layout/NavBar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/addUser';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
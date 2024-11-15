import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} /> 
      </Routes>
    </div>
  );
}

export default App;

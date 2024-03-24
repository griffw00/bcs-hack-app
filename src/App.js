import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Anatomy } from './Components/anatomy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Anatomy/>}/>

      </Routes>
    </Router>
  );
}

export default App;

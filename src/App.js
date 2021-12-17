import './App.css';
import HomePage from './Components/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' element={< HomePage />}></Route>
    </div>
  );
}

export default App;

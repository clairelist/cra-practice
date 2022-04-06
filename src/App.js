import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='nav-wrapper'>
        <Link to='/user'>YOUR page</Link>
        <Link to='/home'>YOUR home</Link>
        <Link to='/post'>POST some NONSENSE</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

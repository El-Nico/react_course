import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;

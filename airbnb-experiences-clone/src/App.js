import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { Card } from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <Card></Card>
    </div>
  );
}

export default App;

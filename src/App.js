import './App.css';
import Navbar from './components/navbar/navbar';
import Home from "./components/home/Home";
import "./components/styles/styles.scss";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
      </header>

      <main>
        Home
        <Home />
      </main>
      Footer
    </div>
  );
}

export default App;

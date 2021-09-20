import './App.css';
import Footer from './components/Footer/Footer';
import LoadRestCountries from './components/LoadRestCountries/LoadRestCountries';

function App() {
  return (
    <div className="App">
    <LoadRestCountries></LoadRestCountries>
    <Footer></Footer>
    </div>
  );
}

export default App;

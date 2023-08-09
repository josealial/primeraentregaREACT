
import Navbar from './components/item/navbar'
import Agendador from './containers/itemsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Agendador />
      
      </header>
    </div>
  );
}

export default App;

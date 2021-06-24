import './App.css';
import Nav from '../components/Nav';
import routeSwitch from '../helpers/routeSwitch';

function App() {
  return (
    <div className="App">
        <Nav />
        <routeSwitch />
    </div>
  );
}

export default App;

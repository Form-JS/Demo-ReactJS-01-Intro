import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className='App'>
      <h1>Demo 1</h1>
      <Welcome
        firstname="Zaza"
        lastname='Vanderquack'
        number={2} />
    </div>
  );
}

export default App;

import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from './pages/pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className='App__header'/> 
        <Pages className='App__pages'/>
      </BrowserRouter>
    </div>

  )
}

export default App;

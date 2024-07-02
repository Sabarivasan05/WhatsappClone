import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Chat from './Chat';


function App() {
  return (
    <div className="App" >
      <div className='app_body'>
      <Sidebar />
      <Chat />
      </div>

      
    </div>
  );
}

export default App;

import './App.css';
import Folder from './Folder';
import explorer from './data/folderData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Folder explorer={explorer} />
      </header>
    </div>
  );
}

export default App;

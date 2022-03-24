import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Jade Mosaico"} />
      </header>
    </>
  )
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Jade Mosaico"} />
        <ItemDetailContainer />
      </header>
    </>
  )
}

export default App;

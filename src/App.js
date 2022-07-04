import './App.css';
import Header from './components/Header'
import ProdDisplay from './components/ProdDisplay';
import SideCart from './components/SideCart';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className='Content'>
          <ProdDisplay></ProdDisplay>
          <SideCart></SideCart>
        </div>
    </div>
  );
}

export default App;

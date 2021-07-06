
import './App.css';
import { petIncrement,petDecrement } from './actions';
import {useSelector, useDispatch} from "react-redux";
function App() {
  const petCounter = useSelector((state) =>state.petCounter);
  const petFavorite = useSelector((state)=> state.petFavorite);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Welcome to react redux</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove Pet</button>
      <h1>Pet counter{petCounter}</h1>
      <h1>Pet favorite {petFavorite}</h1>
    </div>
  );
}

export default App;

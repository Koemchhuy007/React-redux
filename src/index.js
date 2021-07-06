import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore } from "redux";
import reducers from './reducers';
import {Provider} from 'react-redux';

// 1. Store: global state
// 2. Action -define what to do
// const petIncrement = () =>{
//   return {
//     type: "PET_INCREASED"

//   }
// }
// const petDecrement = () =>{
//   return {
//     type: "PET_DECREASED"
//   }
// }
// // 3. Reducer:
// // - describe how an action change from one state into another
// // - Reducer will check which action is called store will be modify
// const petCounter = (state=0, action) =>{
//   switch (action.type){
//     case "PET_INCREASED":
//       return state + 1;
//     case "PET_DECREASED":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// //it is a store
// let store = createStore(petCounter);
// store.subscribe(()=> console.log(store.getState()));
// // 4. Dispatch - perform the action to reducer
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);



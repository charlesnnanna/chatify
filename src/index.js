import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './store'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const render = () => {
  fancyLog()
  return (
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </React.StrictMode>
      ,
      document.getElementById('root')
    )
  )}

  render();

  store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//fancyLog function that logs the state after every re-render/ state update
function fancyLog() {
  console.log("%c Rendered with � � � ", "background: purple;color: #FFF");
  console.log(store.getState());
 }
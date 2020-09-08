import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AmazonStateProvider } from './Context/context';
import reducer, { initialState } from './Context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AmazonStateProvider initialState={initialState} reducer={reducer}>
      <App />
    </AmazonStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

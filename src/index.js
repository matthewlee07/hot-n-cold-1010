import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './reset.css';
import './index.css';
import {toggle, newgame, bigone, guess} from './actions';
import Game from './components/game';

store.dispatch(bigone(5));
store.dispatch(bigone(10));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

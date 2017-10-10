import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './reset.css';
import './index.css';
import {toggle, newgame, bigone} from './actions';
import Game from './components/game';


store.dispatch(toggle());
console.log(store.getState());
store.dispatch(toggle());
console.log(store.getState());
store.dispatch(newgame());
console.log(store.getState());
store.dispatch(newgame());
console.log(store.getState());
store.dispatch(bigone(4));
console.log(store.getState());
store.dispatch(bigone(80));
console.log(store.getState());
store.dispatch(bigone(47));
console.log(store.getState());


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

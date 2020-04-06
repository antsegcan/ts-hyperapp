import { app } from 'hyperapp';

import './scss/global.scss';

import Container from './components/counter/view';
import CounterState from './components/counter/state';

app({
  view: Container,
  node: document.getElementById('app'),
  init: CounterState,
});

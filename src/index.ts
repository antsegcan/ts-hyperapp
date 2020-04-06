import { app } from 'hyperapp';

import Container from './components/counter/view';
import CounterState from './components/counter/state';

app({
  view: Container,
  node: document.body,
  init: CounterState,
});

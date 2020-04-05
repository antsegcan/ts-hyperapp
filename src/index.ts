import { app } from 'hyperapp';

import Container from './components/counter/view';
import CounterActions from './components/counter/actions';
import CounterState from './components/counter/state';

app(CounterState, new CounterActions(), Container, document.body);

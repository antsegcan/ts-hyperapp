import { h } from 'hyperapp';
import CounterActions from './actions';

// Approach to deal with little elements (Similar to React)
function showTitle(number: number) {
  if (10 < number) {
    return <p>Take it easy, the counter is working fine! :)</p>;
  } else {
    return false;
  }
}

// The main view to be exported
const view = (state, actions: CounterActions) => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
      {showTitle(state.count)}
    </div>
  );
};

export default view;

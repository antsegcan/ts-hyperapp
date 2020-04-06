import { h } from 'hyperapp';
import { Substract, Add } from './actions';

import './styles.scss';

// Approach to deal with little elements (Similar to React)
function showTitle(number: number) {
  if (10 < number) {
    return <p>Take it easy, the counter is working fine! :)</p>;
  } else {
    return false;
  }
}

// The main view to be exported
const view = (state) => {
  return (
    <div classList="cmp-block">
      <span>{state.count}</span>
      <button onClick={Substract}>-</button>
      <button onClick={Add}>+</button>
      {showTitle(state.count)}
    </div>
  );
};

export default view;

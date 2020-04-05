export default class CounterActions {
  down = (value: number) => state => ({
    ...state,
    count: state.count - value
  });
  up = (value: number) => state => ({
    ...state,
    count: state.count + value
  });
}

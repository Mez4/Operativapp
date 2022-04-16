import { DECREMENT, INCREMENT, ADD } from "../actions/action.counters";

const CounterReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:  
    const item = action.item
      console.log(action.item.id)
      console.log(state)
      case DECREMENT:
        return state.map((value, i) => {
          if (action.item.id === i) {
          return (action.item.value -= 1);
        }
        return action.item.value;
      });
      case ADD:
        state.push(action.item);
        default:
      return state;
  }
};
export default CounterReducer;

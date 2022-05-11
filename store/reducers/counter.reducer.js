import { DECREMENT, INCREMENT, ADD } from "../actions/action.counters";

const CounterReducer = (state = [], action) => {
  search = (key, inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].id === key) {
        return inputArray[i];
      }
    }
  };
  switch (action.type) {
    case INCREMENT:
      const item = action.item;
      let index = search(item.id, state);
      index.value = index.value + 1;
      let data = [...state, index]
      let  newState = data.filter((item, index)=>{
        return data.indexOf(item)===index;
      })
      return newState;

    case DECREMENT:
      const itemD = action.item;
      let indexD = search(itemD.id, state);
      indexD.value = indexD.value - 1;
      let dataD = [...state, index]
      let  newStateD = dataD.filter((item, index)=>{
        return dataD.indexOf(item)===index;
      })
      return newStateD;  
    case ADD:
      state.push(action.item);
    default:
      return state;
  }
};
export default CounterReducer;

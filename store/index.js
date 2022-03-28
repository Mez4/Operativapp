import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/counter.reducer";

const RootReducer = combineReducers({
  counter: CounterReducer,
});
export default createStore(RootReducer);

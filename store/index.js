const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});
export default createStore(RootReducer);

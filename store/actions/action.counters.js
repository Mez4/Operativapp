export const INCREMENT = "@counter/incremented";
export const DECREMENT = "@counter/decremented";
export const ADD = "@counter/addItem";

export const suma = (item) => {
  return {
    type: "@counter/incremented",
    item: {id:item.id, value:1},

  };
};
export const resta = (item) => {
  return {
    type: "@counter/decremented",
    item: {id:item.id, value:1}, 
  };
};
export const addItem = (item) => {
  return {
    type: "@counter/addItem",
    item: {id:item.id, value:1} 
  };
};

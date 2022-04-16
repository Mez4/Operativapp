export const INCREMENT = "@counter/incremented";
export const DECREMENT = "@counter/decremented";
export const ADD = "@counter/addItem";

export const suma = (item) => {
  return {
    type: "@counter/incremented",
    item: item,

  };
};
export const resta = (item) => {
  return {
    type: "@counter/decremented",
    item: item, 
  };
};
export const addItem = (item) => {
  return {
    type: "@counter/addItem",
    item: {id:item.id, value:1} 
  };
};

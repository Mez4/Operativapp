import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const numColumns = () => {
  let container = Math.floor(windowWidth - windowWidth * 0.1);
  let columns = Math.floor(container / 117);
  if (columns > 4) return 4;
  return columns;
};

export const boxWidth = (numb) => {
  let containerWidth = Math.floor(windowWidth - (windowWidth * 0.1));
  let box = Math.floor(containerWidth / numColumns());
  let width = Math.floor(box - numb);
  if (numColumns() > 4) {
    width = width + 55;
  }
  return width;
};

export const addFakebox = () => {
  const cols = numColumns();
  const fullRows = Math.floor(arr.length / cols);
  let ElementsLastRow = arr.length - fullRows * cols;
  while (ElementsLastRow !== cols && ElementsLastRow !== 0) {
    arr.push({
      value: "",
      empty: true,
      id: Math.random().toString(),
    });
    ElementsLastRow = ElementsLastRow + 1;
  }
};

export const deleteFakebox = (arr) => {
  while (arr.some((item) => item.empty === true)) {
    arr.forEach(function (item, index, arr) {
      if (item.empty === true) {
        arr.splice(index, 1);
      }
    });
  }
  addFakebox(arr);
};

export const formatData = (data) => {
  deleteFakebox(data);
  return data;
};
export {default as CardContent} from "../components/CardContent";
export { default as Body } from "../components/Body";
export {default as Button} from "../components/Button";
export {default as CardCuenta} from "../components/CardCuenta";
export {default as Input} from "../components/Input";
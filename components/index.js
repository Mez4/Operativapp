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


export {default as CardContent} from "../components/CardContent";
export { default as Body } from "../components/Body";
export {default as Button} from "../components/Button";
export {default as CardCuenta} from "../components/CardCuenta";
export {default as Input} from "../components/Input";
export {default as Title} from "../components/Title";
export {default as NameApp} from "../components/NameApp";
export {default as TextDescription} from "../components/TextDescription";
export {default as DiscretButton} from "../components/DiscretButton";
export {default as If} from "../components/If"
export {default as Contador} from "../components/Contador"
export {default as ItemList} from "../components/ItemList"

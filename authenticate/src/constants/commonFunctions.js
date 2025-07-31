import { Dimensions } from "react-native";


const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const widthPercent = (percentage)=>{
  const width = deviceWidth;
  return (percentage*width)/100
}

export const heightPercent = (percentage)=>{
  const height = deviceHeight;
  return (percentage*height)/100
}
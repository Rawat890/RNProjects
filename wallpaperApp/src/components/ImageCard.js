import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { getImageSize, widthPercent } from '../utilities/commonFunctions';

const ImageCard = ({item, index}) => {

  const getImageHeight =()=>{
  let {imageHeight: height, imageWidth:width} = item;
  return {height: getImageSize(height, width)}
  }

  console.log('Item - ',item)
  return (
    <Pressable style={[styles.imageWrapper, styles.spacing]}>
      <Image 
      source ={{uri: item?.webformatURL}} 
      transition={100}
      style={[styles.image, getImageHeight()]}

      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image:{
     width:'100%',
     height:250
  },
  imageWrapper:{
    backgroundColor:theme.colors.grayBg,
    borderCurve:'continuous',
    borderRadius:theme.radius.xs,
    overflow:'hidden',
    marginBottom:widthPercent(2)
  },
  spacing:{
    marginRight:widthPercent(1),
    marginLeft:widthPercent(1),
  }
})

export default ImageCard;
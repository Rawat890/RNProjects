import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

const ImageCard = ({item, index}) => {
  console.log('Item - ',item)
  return (
    <Pressable>
      <Image 
      source ={{uri: item?.webformatURL}} 
      transition={100}
      style={styles.image}

      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image:{
     width:'100%',
     height:250
  }
})

export default ImageCard;
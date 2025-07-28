import { Pressable, StyleSheet, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'
import { heightPercent } from '../utilities/commonFunctions'

const CustomButton = ({title, style, bgColor, titleColor, onPress}) => {
  return (
    <Pressable android_ripple={true} onPress={onPress} style={styles.button}>
      <Text style={[styles.buttonText, {color:titleColor}] }>
       {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'gray',
    padding:scale(10),
    paddingHorizontal:scale(90),
    paddingVertical:scale(10),
    borderRadius:theme.radius.xl
  },
  buttonText:{
    fontSize:heightPercent(2.3),
    fontWeight:theme.fontWeights.semiBold,
  }
})

export default CustomButton

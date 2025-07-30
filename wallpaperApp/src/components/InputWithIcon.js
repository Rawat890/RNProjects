import { Image, Pressable, StyleSheet, TextInput, View, } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '../constants/theme'

export const InputWithIcon = ({ placeholder, secureEntry, onChange, value, source1, source2 , onPressSource2}) => {

  console.log('Text', value)
  return (
    <View style={styles.input}>
        <Image source={source1} style={styles.icon}/>
        <TextInput
          placeholder={placeholder}
        secureTextEntry={secureEntry}
        onChangeText={onChange}
        value={value}
        placeholderTextColor={theme.colors.black}
        style={styles.inputText}
      />
      {source2 && (
        <Pressable onPress={onPressSource2}>
          <Image source={source2} style={styles.icon} />
        </Pressable>
      )}

    </View>
  )
}


const styles = StyleSheet.create({
 input: {
  paddingHorizontal: scale(12),
  marginHorizontal:scale(12),
  paddingVertical: scale(8),
  backgroundColor: theme.colors.white,
  borderRadius: scale(25),
  flexDirection: 'row',
  alignItems: 'center',
  gap: scale(8), 
},
inputText: {
  flex: 1,
  fontSize: scale(14),
  color: theme.colors.black,
},

  icon: {
    width: scale(24),
    height: scale(24),
  }
})

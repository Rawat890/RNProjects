import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import theme from '../utilities/theme'

export default function Button({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
  paddingVertical: 6,
  paddingHorizontal: 16,
  backgroundColor: theme.colors.danger,
  borderRadius: theme.borderRadius.round,
  },
  buttonText:{
    fontSize: 14,
    color: theme.colors.background

  }
})
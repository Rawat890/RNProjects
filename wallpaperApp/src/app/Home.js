import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { InputWithIcon } from '../components/InputWithIcon'
import { close, search } from '../constants/Images'
import { theme } from '../constants/theme'
import { heightPercent, widthPercent } from '../utilities/commonFunctions'

const Home = () => {

  const [isClosePressed, setIsClosedPressed]=useState(false);
  const [searchText, setSearchText]=useState('');

  return (
    <View style={styles.container}>
      {/*header*/}
      <View style={styles.header}>
      <Pressable>
        <Text style={styles.title}>
          Pixels
        </Text>
      </Pressable>
      <Pressable>
        <FontAwesome6 name="bars-staggered" color={theme.colors.neutral(0.7)}/>
      </Pressable>
      
    </View>
      <ScrollView 
       contentContainerStyle={{gap:scale(15)}}
      >
        <InputWithIcon placeholder='Search picture here' source1={search} source2={close} onChange={(text) => setSearchText(text)} value={searchText}
          onPressSource2={() => {
            setSearchText('');
            setIsClosedPressed(prev => !prev);
          }}
        />

        </ScrollView>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:scale(12),
    backgroundColor:theme.colors.white,
  },
  header:{
    marginHorizontal:widthPercent(4),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
   title: {
      fontSize: heightPercent(2.8),
      color: theme.colors.neutral(0.9),
      fontWeight: theme.fontWeights.medium
    },
})

export default Home

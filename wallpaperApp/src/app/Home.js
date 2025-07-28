import { FontAwesome6 } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'
import { apiCall } from '../api'
import { InputWithIcon } from '../components/InputWithIcon'
import { close, search } from '../constants/Images'
import { theme } from '../constants/theme'
import { heightPercent, widthPercent } from '../utilities/commonFunctions'
import { Categories } from './appComponents/Categories'

const Home = () => {
  
  const {top}=useSafeAreaInsets();
  const paddingTop = top > 0 ? top+10 : 10;
  const [isClosePressed, setIsClosedPressed]=useState(false);
  const [searchText, setSearchText]=useState('');
  const [activeCategory, setActiveCategory] = useState('nature');

const handleCategoryChange = (category) => {
  setActiveCategory(category);
};

useEffect(()=>{
  fetchImages();
}, [])

const fetchImages = async (params ={page:1}, append=true) => {
  let res = await apiCall(params);
  console.log('Result - ', res);
}
  return (
    <View style={[styles.container, {paddingTop}]}>
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
        
        <Categories handleCategoryChange={handleCategoryChange} activeCategory={activeCategory}/>
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
    marginHorizontal:widthPercent(6),
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

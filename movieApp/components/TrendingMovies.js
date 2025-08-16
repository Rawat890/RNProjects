import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Images } from '../constants/images';
import { Routes } from '../constants/routes';
import { getDimension } from '../utilities/commonFunctions';

const [screenWidth, screenHeight] = getDimension();

export default function TrendingMovies({data}) {
  const navigation =useNavigation();

  const handleClick =(item)=>{
   navigation.navigate(Routes.MOVIE, item)
  }
  return (
    <View className = "mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
      data={data}
      renderItem = {({item})=> <MovieCard item={item} handleClick={handleClick}/>}
      firstItem={1}
      inactiveSlideOpacity={0.60}
      sliderWidth={screenWidth}
      itemWidth={screenWidth*0.62}
      slideStyle={{display:'flex', alignItems:'center'}}
      />

    </View>
  )
}


const MovieCard = ({item, handleClick})=>{
  return(
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image source = {Images.naruto}
      style={{
        width:screenWidth*0.6,
        height:screenHeight*0.4,
      }}
      />
    </TouchableWithoutFeedback>
  )
}
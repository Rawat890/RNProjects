import { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { scale } from 'react-native-size-matters';
import MovieList from '../components/MovieList.js';
import TrendingMovies from '../components/TrendingMovies.js';
import { colors } from '../utilities/theme';

const ios = Platform.OS ==='ios'
export default function HomeScreen() {

  const [trending, setTrending]=useState([1,2,3])
  const [upcoming, setUpcoming]=useState([1,2,3])
  const [topRated, setTopRated]=useState([1,2,3])

  return (
    <View clasName ="flex-1 bg-neutral-800">

      {/*search bar and logo*/}
      <SafeAreaView clasName={ios ? "-mb-2":"mb-3"}>
      <View clasName="flex-row justify-between items-center mx-4">
        <Bars3CenterLeftIcon size="30" color={colors.white}/>
        <Text clasName="text-white text-3xl font-bold">
         Movies
        </Text>
        <TouchableOpacity>
        <MagnifyingGlassIcon size="30" strokeWidth={2} color={colors.white}/>
        </TouchableOpacity>
      </View>
      </SafeAreaView>

      {/* Trending movie carousal */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:scale(10)}}>
      <TrendingMovies data={trending}/>

      {/* Upcoming moview */}
      <MovieList title="Upcoming" data={upcoming}/>
      <MovieList title="Top Rated" data={topRated}/>
      </ScrollView>

    </View>
  )
}
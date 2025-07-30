import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import { data } from '../../constants/data';
import { theme } from '../../constants/theme';

export const Categories = ({ handleCategoryChange, activeCategory }) => {

  const renderItem = ({ item , index}) => {
    const isActive = item === activeCategory;

    return (
      <Animated.View entering={FadeInRight.delay(index*200).duration(1000).springify().damping(14)}>
      <TouchableOpacity
        style={[styles.categoryItem, isActive && styles.activeCategoryItem]}
        onPress={() => handleCategoryChange(item)}
      >
        <Text style={[styles.text, isActive && styles.activeText]}>
          {item}
        </Text>
      </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: scale(10),
    gap: scale(10),
  },
  categoryItem: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    borderRadius: scale(20),
  },
  activeCategoryItem: {
    backgroundColor: 'green'
  },
  text: {
    fontSize: scale(12),
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.black,
  },
  activeText: {
    color: theme.colors.white,
  },
});

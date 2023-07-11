import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RecipeScreenProps } from "../utils/types/NavigationTypes";
import { TouchableOpacity } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../utils/types/NavigationTypes';

type RecipeListScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'RecipeList'
>;

interface RecipeListProps {
  navigation: RecipeListScreenNavigationProp;
}

const RecipeList: React.FC<RecipeScreenProps> = ({navigation}) => {
  const recipes = [
    { title: 'Creamy Tomato Pasta', servings: 3, type: 'Dinner', image: 'https://cdn.pixabay.com/photo/2017/11/11/10/14/pasta-2938726_1280.jpg' },
    { title: 'Apple Pie', servings: 10, type: 'Dessert', image: 'https://www.thereciperebel.com/wp-content/uploads/2021/10/apple-pie-www.thereciperebel.com-1200-17-of-53.jpg' },
    { title: 'Spaghetti', servings: 2, type: 'Dinner', image: 'https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-mediumSquareAt3X.jpg' },
    { title: 'French Toast', servings: 5, type: 'Breakfast', image: 'https://www.seriouseats.com/thmb/_nSWyhg_GmvdjUwMMvX7KG6lYNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg' },
    { title: 'Pesto Lasagna Rolls', servings: 4, type: 'Dinner', image: 'https://www.thespruceeats.com/thmb/cs4RURcDGDODlR9Rg_g98q1x8mw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-lasagna-rolls-giant-56a9bf315f9b58b7d0fe9eaf.jpg' }
  ];

  const handleRecipePress = (recipe: any) => {
    navigation.navigate('Recipe');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECIPE LIST</Text>
      <View style={styles.listContainer}>
        {recipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => handleRecipePress(recipe)}
          >
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeType}>{recipe.type}</Text>
            </View>
            <Text style={styles.servings}>{recipe.servings} servings</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeType: {
    fontSize: 12,
    color: 'gray',
  },
  servings: {
    textAlign: 'right',
  },
});

export default RecipeList;

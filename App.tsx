import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/utils/types/NavigationTypes";
import RecipeList from "./src/screens/RecipeListView";
import RecipeDetail from "./src/screens/RecipeDetail";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import NavigationBar from "./src/utils/components/NavigationBar";
import AddNewRecipe from "./src/screens/AddNewRecipe";
import MealPlanDetailsScreen from "./src/screens/MealPlanDetails";
import ShoppingList from "./src/screens/ShoppingList";

const Stack = createBottomTabNavigator<RootStackParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
  return <NavigationBar {...props} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ title: "Welcome to Your Recipe Journal" }}
        />
        <Stack.Screen
          name="MealPlanDetails"
          component={MealPlanDetailsScreen}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeList}
          options={({ navigation }) => ({ navigation })}
        />
        <Stack.Screen name="Recipe" component={RecipeDetail} />
        <Stack.Screen name="AddNewRecipe" component={AddNewRecipe} />
        <Stack.Screen name="ShoppingList" component={ShoppingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#46288b",
  },
});

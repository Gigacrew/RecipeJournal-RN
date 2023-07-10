import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/utils/types/NavigationTypes";
import RecipeDetail from "./src/components/RecipeDetail";
import HomeScreen from "./src/components/HomeScreen";
import DetailsScreen from "./src/components/DetailsScreen";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import NavigationBar from "./src/utils/components/NavigationBar";
import MealPlanDetailsScreen from "./src/components/MealPlanDetails";

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
          initialParams={{ text: "Look I Started Here" }}
        />
        <Stack.Screen
          name="MealPlanDetails"
          component={MealPlanDetailsScreen}
        />
        <Stack.Screen name="Recipe" component={RecipeDetail} />
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

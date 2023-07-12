import React from "react";
import { View, Text, TouchableHighlight, Button } from "react-native";
import { HomeScreenProps } from "../utils/types/NavigationTypes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params?.title}</Text>

      <Button
        title="Head to Shopping List"
        onPress={() => navigation.navigate("ShoppingList")}
      ></Button>
      <Button
        title="Head to Meal Plan"
        onPress={() => navigation.navigate("MealPlanDetails")}
      ></Button>
    </View>
  );
};

export default HomeScreen;

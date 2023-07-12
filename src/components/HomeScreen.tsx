import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { HomeScreenProps } from "../utils/types/NavigationTypes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params?.title}</Text>
    </View>
  );
};

export default HomeScreen;

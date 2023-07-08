import React from "react";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  RootStackParamList,
  HomeScreenProps,
} from "../utils/types/NavigationTypes";
import NavigationBar from "../utils/components/NavigationBar";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const additionalProps = {
    title: "Home Screen",
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params?.title}</Text>
      <NavigationBar
        navigation={navigation}
        additionalProps={additionalProps}
      />
    </View>
  );
};

export default HomeScreen;

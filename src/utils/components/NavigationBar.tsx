import React from "react";
import { View, Button, Text } from "react-native";
import {
  NavigationBarProps,
  RootStackParamList,
} from "../types/NavigationTypes";

const NavigationBar: React.FC<NavigationBarProps> = ({ navigation }) => {
  const screens: RootStackParamList = {
    Home: {
      text: "Home",
    },
    Details: { text: "Details" },
  };

  const screenNames: (keyof RootStackParamList)[] = Object.keys(
    screens
  ) as (keyof RootStackParamList)[];
  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      {screenNames.map((screenName) => (
        <Button
          key={screenName}
          title={screens[screenName].text}
          onPress={() => navigateToScreen(screenName)}
        />
      ))}
    </View>
  );
};

export default NavigationBar;

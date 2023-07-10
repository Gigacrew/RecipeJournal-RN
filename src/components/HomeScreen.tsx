import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { HomeScreenProps } from "../utils/types/NavigationTypes";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params?.title}</Text>
      <TouchableHighlight
      onPress={()=> navigation.navigate('AddNewRecipe')}
      style={{width: 40, height: 40, borderRadius: 20, backgroundColor:"#873e23", position: 'absolute', bottom: 60, right:20, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32}}>
          +
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;

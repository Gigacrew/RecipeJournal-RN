import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { RecipeScreenProps } from "../utils/types/NavigationTypes";

const RecipeDetail: React.FC<RecipeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.box1]}>
        <Text style={styles.textStyle}>CREAMY TOMATO PASTA</Text>
        <Image
          style={styles.iconStyle}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/11/11/10/14/pasta-2938726_1280.jpg",
          }}
        />
      </View>
      <View style={[styles.boxStyle, styles.box2]}>
        <Text style={styles.contenttextStyle}>
          This Creamy Tomato Pasta is a simple and delicious meal made from
          scratch with a cream and tomato based sauce that is rich and silky
          smooth. This quick and easy recipe is ready in under 30 minutes using
          simple ingredients that are easy to find.
        </Text>
        <Text style={styles.subHeadingText}>Ingredients Needed:- </Text>
        <Text>1. Pasta</Text>
        <Text>2. Butter</Text>
        <Text>3. Garlic</Text>
        <Text>4. Tomato Sauce</Text>
        <Text>5. Salt and Pepper</Text>
        <Text>6. Freshly Parsley</Text>

        <Text
          style={styles.clickMeStyle}
          onPress={() => {
            Alert.alert("Attention!", "Operation Success");
          }}
        >
          Click here to view the recipe
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "red",
  },
  boxStyle: {
    width: "100%",
    padding: 5,
  },
  box1: {
    backgroundColor: "white",
    flex: 0.75,
    // height:150
  },
  box2: {
    backgroundColor: "white",
    flex: 1,
    // height:150
  },
  textStyle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  contenttextStyle: {
    fontSize: 16,
    fontWeight: "normal",
  },
  iconStyle: {
    marginTop: 10,
    width: "100%",
    height: "80%",
  },
  mainHeadingText: {
    padding: 2,
    fontSize: 25,
    fontWeight: "900",
  },

  subHeadingText: {
    padding: 2,
    fontSize: 15,
    fontWeight: "bold",
  },
  clickMeStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2a9df4",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default RecipeDetail;

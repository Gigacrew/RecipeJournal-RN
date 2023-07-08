import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: HomeScreenCustomProps;
  Details: DetailsScreenCustomProps;
  Recipe: RecipeDetailCustomProps;
};

type HomeScreenCustomProps = {
  navButtonText: string;
  title?: string;
};
type DetailsScreenCustomProps = {
  navButtonText: string;
  title?: string;
};
type RecipeDetailCustomProps = {
  title?: string;
  navButtonText: string;
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type RecipeScreenRouteProp = RouteProp<RootStackParamList, "Recipe">;
type RecipeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Recipe"
>;
export type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
export type RecipeScreenProps = {
  navigation: RecipeScreenNavigationProp;
  route: RecipeScreenRouteProp;
};
export type NavigationBarProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

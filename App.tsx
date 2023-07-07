import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import RecipeDetail from './src/components/RecipeDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <PageHeader></PageHeader>
      <RecipeDetail></RecipeDetail>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46288b'
  },
});

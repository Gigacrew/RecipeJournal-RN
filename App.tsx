import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import ShoppingListPage from './src/components/ShoppingListPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ShoppingListPage></ShoppingListPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Shopping List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9A9A9',
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    color: 'maroon',
  },
});

export default Header;

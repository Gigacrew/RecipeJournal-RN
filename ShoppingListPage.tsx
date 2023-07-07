import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ShoppingListPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.typesContainer}>
          <Text style={styles.type}>Bakery</Text>
          <Text style={styles.type}>Produce</Text>
          <Text style={styles.type}>Meat</Text>
        </View>
        <Text style={styles.itemsTitle}>Items</Text>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item1</Text>
            <Text style={styles.itemReference}>Bakery</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item2</Text>
            <Text style={styles.itemReference}>Produce</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item3</Text>
            <Text style={styles.itemReference}>Meat</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item4</Text>
            <Text style={styles.itemReference}>Produce</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item5</Text>
            <Text style={styles.itemReference}>Bakery</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item6</Text>
            <Text style={styles.itemReference}>Meat</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item7</Text>
            <Text style={styles.itemReference}>Produce</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item8</Text>
            <Text style={styles.itemReference}>Bakery</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item9</Text>
            <Text style={styles.itemReference}>Meat</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Item10</Text>
            <Text style={styles.itemReference}>Produce</Text>
            <Text style={styles.itemQuantity}>2</Text>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'maroon',
    marginBottom: 20,
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  type: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginHorizontal: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  itemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsContainer: {
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    marginBottom: 10,
    marginTop: 5,
  },
  item: {
    marginBottom: 5,
  },
  itemReference: {
    fontSize: 12,
    color: 'gray',
  },
  itemQuantity: {
    flex: 1,
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'maroon',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    color: 'white',
    fontSize: 34,
  },
});

export default ShoppingListPage;

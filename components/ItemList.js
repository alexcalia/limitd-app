import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const ItemList = ({ items }) => {
  return (
    <FlatList
      contentContainerStyle={styles.itemsList}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemBox}>
          <Text style={[styles.itemText, styles.itemHeader]}>{item.name}</Text>
          <View style={styles.itemImage} />
          <Text style={styles.itemText}>${item.price}</Text>
          <Text style={styles.itemText}>{item.description}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemBox: {
    marginBottom: 20,
  },
  itemsList: {
    alignItems: 'center',
    paddingBottom: 150,
  },
  itemImage: {
    height: 300,
    width: 200,
    backgroundColor: 'teal',
    marginBottom: 5,
  },
  itemText: {
    textAlign: 'center',
  },
  itemHeader: {
    marginBottom: 10,
  },
});

export default ItemList;

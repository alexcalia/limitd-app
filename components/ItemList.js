import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ItemPreview from './ItemPreview';

const ItemList = ({ items }) => {
  return (
    <FlatList
      contentContainerStyle={styles.itemsList}
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <ItemPreview style={styles.itemBox} item={item} />
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

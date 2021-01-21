import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import BRANDS from '../utils/BRANDS';

const Home = () => {
  const [currentItems, setCurrentItems] = useState();

  const handleBrandPress = (item) => {
    setCurrentItems(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>LIMITD</Text>
      <Text style={styles.brandsHeader}>Brands</Text>
      <FlatList
        style={styles.brandList}
        data={BRANDS}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBrandPress(item.data)}>
            <Text style={styles.brandItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        contentContainerStyle={styles.itemsList}
        data={currentItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemBox}>
            <Text style={[styles.itemText, styles.itemHeader]}>
              {item.name}
            </Text>
            <View style={styles.itemImage} />
            <Text style={styles.itemText}>${item.price}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  brandsHeader: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  brandItem: {
    paddingHorizontal: 10,
  },
  brandList: {
    marginBottom: 20,
  },
  itemBox: {
    marginBottom: 15,
  },
  itemsList: {
    alignItems: 'center',
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

export default Home;

import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import BRANDS from '../utils/BRANDS';
import ItemList from '../components/ItemList';
import BrandList from '../components/BrandList';

const Home = () => {
  const [currentItems, setCurrentItems] = useState();

  const handleBrandPress = (item) => {
    setCurrentItems(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>LIMITD</Text>
      <Text style={styles.brandsHeader}>Brands</Text>
      <BrandList handleBrandPress={handleBrandPress} BRANDS={BRANDS} />
      <ItemList items={currentItems} />
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
});

export default Home;

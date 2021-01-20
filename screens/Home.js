import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';

const BRANDS = [
  'Test1',
  'Test2',
  'Test3',
  'Test4',
  'Test5',
  'Test6',
  'Test7',
  'Test8',
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>LIMITD</Text>
      <Text style={styles.brandsHeader}>Brands</Text>
      <FlatList
        style={styles.brandList}
        data={BRANDS}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.brandItem}>{item}</Text>}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'black',
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
});

export default Home;

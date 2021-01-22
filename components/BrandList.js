import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

const BrandList = ({ handleBrandPress, BRANDS }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  brandItem: {
    paddingHorizontal: 10,
  },
  brandList: {
    marginBottom: 20,
  },
});

export default BrandList;

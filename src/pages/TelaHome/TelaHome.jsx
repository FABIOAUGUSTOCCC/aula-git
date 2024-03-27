import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const TelaHome = () => {
  const restaurantData = [
  ];

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity style={styles.restaurantContainer}>
      <Image source={item.image} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SaborFit</Text>
      <FlatList
        data={restaurantData}
        renderItem={renderRestaurantItem}
        keyExtractor={item => item.id}
        style={styles.restaurantList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restaurantList: {
    flex: 1,
  },
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantCuisine: {
    fontSize: 14,
    color: '#777',
  },
});

export default TelaHome;
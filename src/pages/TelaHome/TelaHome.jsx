import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSearch);

const TelaHome = () => {
  const [searchText, setSearchText] = useState('');

  const handleButtonPress = ({navigation}) => {
    console.log('Botão pressionado!');
    navigation.navigate('TelaCarrinho');
  };

  const handleSearch = () => {
    console.log('Texto de pesquisa:', searchText);
   
  };

  return (
    <View style={styles.container}>
      <View>
        <Image src='./assets/imagensApp/restaurant1.jpg'/>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          onChangeText={setSearchText}
          value={searchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesomeIcon icon="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <FontAwesomeIcon icon="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#3FA781',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA781',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  image: {
    width: 200,
    height: 200,
  }
});

export default TelaHome;